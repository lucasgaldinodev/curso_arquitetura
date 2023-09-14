import TerminalUtil from "@/app/util/TerminalUtil";
import MenuFundamentos from "./menuFundamentos";
import MenuUsuario from "./menuUsuario";

export default async function MenuPrincipal() {
    TerminalUtil.titulo('Menu Principal')

    const [indice] = await TerminalUtil.menu([
        '1. Fundamentos',
        '2. Usuário',
        'Sair'
    ])

    switch (indice) {
        case 0: await MenuFundamentos(); break
        case 1: await MenuUsuario(); break
        default: process.exit(0)
    }

    MenuPrincipal()
}