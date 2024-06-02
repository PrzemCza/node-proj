
export default function nowa() {

    const title = "A oto jest sztuka";


    return (
        <div className="h-screen flex items-center justify-center">
            <div className="flex flex-col gap-y-3">
                <h1 className="text-center text-5xl text-orange-400">{title}</h1>
                <div className="text-center"> Edward Hopper - Nighthawks </div>
                <img src="nighthawks.jpg" alt="Nighthawks" className="w-640 h-350" />
            </div>
        </div>
    );
} 