import Image from "next/image";

function Loading({ message }: { message: string }) {
    return (
        <div className="flex flex-col items-center justify-center w-full h-full animate-fade-in">
            <Image
                src="/bauplan-logo.svg"
                alt="Loading logo"
                className="w-16 h-16 mb-4 animate-bounce
    "
            />
            <p className="text-slate-400 text-sm animate-fade-delayed">{message}</p>
        </div>
    );
}

export default Loading;