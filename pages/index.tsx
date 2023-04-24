import { Configuration, OpenAIApi } from 'openai';

export default function Home({openaiApiKey}) {
  function newChat() {
    const config = new Configuration({
      apiKey: openaiApiKey,
    });
    const openai = new OpenAIApi(config);
    openai.createChatCompletion({
      model: 'gpt-3.5-turbo',
      messages: [{
        role: 'user',
        content: 'Hello!'
      }]
    }).then(
      data => console.log(data.data.choices[0].message?.content)
    ).catch(
      error => console.log(error)
    )
  }

  return (
    <button onClick={newChat}>Start My ChatGPT</button>
  )
}

export async function getStaticProps() {
  const openaiApiKey: string = process.env.OPENAI_API_KEY as string;
  return { props: {openaiApiKey} }
}
