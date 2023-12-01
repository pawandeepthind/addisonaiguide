import { NextRequest, NextResponse } from "next/server";
import { ChatCompletionRequestMessage, Configuration, CreateChatCompletionResponse, OpenAIApi } from "openai";

const configuration = new Configuration({
    apiKey: process.env.CHATGPT_API_KEY,
});
const openai = new OpenAIApi(configuration);

export async function POST(req: NextRequest, res: NextResponse) {
    const rq = await req.json()
    try {
        const completion = await openai.createChatCompletion({
            model: "gpt-4",
            messages: generateMessage(rq.content, rq.wikiLink, rq.question),
            max_tokens: 60,
            n: 1,
            temperature: 0.2,
        })
        return NextResponse.json({ result: completion.data.choices[0].message?.content });
        // return NextResponse.json({ result: req.body.toUpperCase() });
    } catch(error) {
        console.error('Error creating chat completion:', error);
        return NextResponse.json({ result: '' + error });
    }
}

function generateMessage(body: string, wikiLink: string, question: string): Array<ChatCompletionRequestMessage> {
    return [
        { role: "system", content: 'You are guide in Addison Gallery of American Art and you have to answer question based on below content. Be very courtious and helpful'},
        { role: "assistant", content: "You can use this context: " + body},
        { role: "assistant", content: "You can use this is Wiki page for additional context: " + wikiLink},
        { role: "user", content: question}
    ];
}