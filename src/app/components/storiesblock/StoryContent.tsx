'use client';

export default function StoryContent() {
  const paragraphs = [
    `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`,

    `It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker.`,

    `Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.`,

    `Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and discovered its classical source.`,

    `Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator.`,
  ];

  return (
    <section
      className="w-full max-w-4xl overflow-hidden mx-auto py-12 pb-4 text-gray-800"
      style={{
        fontFamily:
          "'Merriweather', Georgia, Cambria, 'Times New Roman', Times, serif",
      }}
    >
      <div
        id="storyContent"
        className="text-[1.25rem] leading-[2rem] md:text-[1.5rem] md:leading-[2.8rem] tracking-normal"
      >
        {Array.from({ length: 7 }).map((_, i) =>
          paragraphs.map((para, j) => (
            <p key={`${i}-${j}`} className="mb-6">
              {para.includes('consectetur') ? (
                <>
                  {para.split('consectetur')[0]}
                  <strong>consectetur</strong>
                  {para.split('consectetur')[1]}
                </>
              ) : (
                para
              )}
            </p>
          ))
        )}
      </div>
    </section>
  );
}
