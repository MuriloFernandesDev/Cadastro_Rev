import Link from 'next/link'
export default function Button() {
    return (
        <>
            <div className="flex justify-center w-full items-center mt-10">
                <Link href={'/'}>
                    <a className="text-white bg-Loja uppercase text-lg font-semi-bold rounded-md w-full flex justify-center">
                        Próximo
                    </a>
                </Link>
            </div>
        </>
    )
}
