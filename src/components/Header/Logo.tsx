import { Image, Link } from "@chakra-ui/react"

export function Logo() {
    return (
        <>
            <Link href="/">
                <Image h={70} src="images/logo.png" alt="Logotype"></Image>
            </Link>
        </>
    );
}