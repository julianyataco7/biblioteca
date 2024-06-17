import { PrismaClient, usuarios } from "@prisma/client";
import { IUsuario } from "../models/Usuario";
import { RESPONSE_DELETE_OK, RESPONSE_INSERT_OK, RESPONSE_UPDATE_OK } from "../shared/constants";
import { fromPrismaUsuario, toPrismaUsuario } from "../mappers/usuarioMappers";

const prisma = new PrismaClient();

export const insertarUsuario = async (usuario: IUsuario) => {
    
    await prisma.usuarios.create({
        data: toPrismaUsuario(usuario)
    });
    return RESPONSE_INSERT_OK;
}

export const listarUsuarios = async () => {
    const usuarios: usuarios[] = await prisma.usuarios.findMany({
        where: {
            estado: '1'
        }
    });
    return usuarios.map((usuario: usuarios)=> fromPrismaUsuario(usuario));
}

export const obtenerUsuario = async (idUsuario: number) => {
    console.log('usuarioservice::obtenerUsuario',idUsuario);

    const usuario: usuarios =  await prisma.usuarios.findUnique({
        where: {
            id_usuario: idUsuario,
            estado: '1'
        }
    });

    return fromPrismaUsuario(usuario);
}

export const modificarUsuario = async (idUsuario: number, usuario:IUsuario) => {
    console.log('usuarioservice::modificarUsuario',idUsuario,usuario);
    await prisma.usuarios.update({
        data: toPrismaUsuario(usuario),
        where:{
            id_usuario: idUsuario
        }
    });

    return RESPONSE_UPDATE_OK;
}


export const eliminarUsuario = async (idUsuario: number) => {
    console.log('usuarioservice::eliminarUsuario',idUsuario);

    await prisma.usuarios.update({
        data: {
            estado: '0'
        },
        where: {
            id_usuario: idUsuario
        }
    })

    return RESPONSE_DELETE_OK;
}