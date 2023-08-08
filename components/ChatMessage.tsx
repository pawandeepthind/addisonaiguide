import { SpeakerWaveIcon } from '@heroicons/react/20/solid'

function speak(text: string) {
    let utterance = new SpeechSynthesisUtterance(text);
    utterance.pitch = .95; //changes pitch
    utterance.rate = 0.9;
    speechSynthesis.speak(utterance);
}

export default function Avtar({ isLeftSide, message }: { isLeftSide: boolean, message: string }) {
    let retElement;
    if (isLeftSide) {
        retElement = (
            <div className="col-start-1 col-end-8 p-3 rounded-lg">
                <div className="flex flex-row items-center">
                    <div className="flex items-center justify-center h-10 w-10 rounded-full bg-red-300 text-red-700 flex-shrink-0">
                        You
                    </div>
                    <div className="flex relative ml-3 text-sm bg-white py-2 px-4 shadow rounded-xl">
                        <div>{message}</div>
                        <div className="pl-3"><SpeakerWaveIcon className="bg-slate-200 hover:shadow-lg rounded-md" width={25} onClick={(e) => speak(message)}></SpeakerWaveIcon></div>
                    </div>
                </div>
            </div>
        );
    } else {
        retElement = (
            <div className="col-start-6 col-end-13 p-3 rounded-lg">
                <div className="flex items-center justify-start flex-row-reverse">
                    <div className="flex items-center justify-center h-10 w-10 rounded-full bg-blue-400 flex-shrink-0">
                        AI
                    </div>
                    <div className="flex relative mr-3 text-sm bg-blue-100 py-2 px-4 shadow rounded-xl">
                        <div>{message}</div>
                        <div className="pl-3"><SpeakerWaveIcon className="bg-slate-300 hover:shadow-lg rounded-md" width={25} onClick={(e) => speak(message)}></SpeakerWaveIcon></div>
                    </div>
                </div>
            </div>
        )
    }
    return retElement;
}