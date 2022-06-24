import Link from 'next/link'
export default function Button() {
    return (
        <>
            <button
                className="flex justify-center mx-auto font-bold uppercase w-full text-white text-xl py-3 mt-2 rounded-xl hover:scale-105 ease-in-out duration-300 bg-Loja"
                type="submit"
            >
                Próximo
            </button>
        </>
    )
}
