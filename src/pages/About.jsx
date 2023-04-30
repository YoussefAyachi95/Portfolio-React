import Footer from '../components/Footer'
import './Main.css'

export default function About() {
  return (
    <div className="App flex flex-col min-h-screen overflow-x-hidden bg-gray-900 text-gray-100 scroll-smooth overflow-hidden">
    <div id='background_colored'>
        <main className='outer-grid fluid-container ml-44'>
            <div className='grid gap-8 md:grid-cols-12'>
                <div className='md:col-span-8 md:col-start-3 mt-24'>
                    <section>
                        <article className='prose md:prose-xl prose-invert prose-a:underline prose-a:underline-offset-2 prose-a:decoration-amber-500 hover:prose-a:decoration-amber-600 prose-a:decoration-from-font hover:prose-a:text-amber-500 focus:prose-a:outline-none focus-visible:prose-a:ring focus-visible:prose-a:ring-amber-500 focus-visible:prose-a:rounded-sm prose-blockquote:border-amber-500 prose-figure:my-0 prose-hr:border-gray-700 prose-lead:text-gray-700 prose-pre:whitespace-pre-wrap prose-contents mb-24 w-3/4'>
                            <h1>About me:</h1>
                            <figure className='not-prose size-full'>
                                <img src="../images/second_image.jpeg" className='max-w-[100%] max-h-[33rem] transition duration-300 ease-in-out shadow-xl rounded-xl hover:shadow-lg' alt="A picture of the author of this page" />
                                <figcaption className='class="block mt-2 text-sm text-gray-400 dark:text-gray-500 "'>Museum Ludwig - Cologne, Germany</figcaption>
                            </figure>
                            <h2>A little more:</h2>
                            <p>I am currently doing a one year Full Stack Web Development Course (MERN Stack) at <a href='https://digitalcareerinstitute.org/de/' rel='noreferrer' target="_blank">Digital Career Institute</a> in Germany, where I study in a team to build amazing consumer and internal applications. Previously, I've been doing online courses where I've learnt basic knowledge in design and app development.</p>
                            <p>These days my time is spent researching, learning and coding.</p>
                            <p>Out of classes you'll find me playing video games, having a walk along the Rhine or petting all the good cats. I also like to travel whenever I have the time for it.</p>
                        </article>
                    </section>
                </div>
            </div>
        </main>
    </div>
    <Footer/>
    </div>
  )
}
