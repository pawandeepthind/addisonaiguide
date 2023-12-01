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
            <div className="col-start-1 col-end-12 p-1 rounded-sm">
                <div className="flex relative text-l bg-white py-2 px-4 rounded-md border-gray-300 border-2">
                    <div><b>You </b> <div>{message}</div></div>
                </div>
            </div>
        );
    } else {
        retElement = (
            <div className="col-start-1 col-end-12 p-1 rounded-sm ">
                <div className="text-l bg-blue-100 py-2 px-4 rounded-md border-blue-300 border-2 items-start">
                    <div className='text-right'><b>Guide</b> <div>{message}</div></div>
                </div>
            </div>
        )
    }
    return retElement;
}