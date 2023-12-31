import Image from 'next/image';

export default async function ArticleInfo({ slug, title, image, body }: { slug: string, title: string, image: string, body: string }) {
    return (
        <div className='p-10 flex flex-col h-full w-full overflow-x-hidden'>
            <h1 className='pb-5 text-6xl text-white-800'>{title}</h1>
            <Image src={image} width="340" height="230" className='mb-2 rounded ' alt="" />
            <article className="text-white"
                dangerouslySetInnerHTML={{ __html: body }} />
        </div>
    );
}