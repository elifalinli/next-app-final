
import Feed from "@/components/Feed"

const Home = () => {
  return (
   
     <section className="w-full flex-center flex-col">
        <h1 className="head_text text-center">
            Discover & Share
        <br className="max-md:hidden" /> <br/>
        <span className="orange_gradient text-center"> AI-powered prompts</span>
        </h1>
        <p className="desc text-center">
            open-source AI prompting tool bla la bla bla bla 
            labla labla huaha uhah thiuahtg
        </p>
        <Feed/>
     </section>
   
  )
}

export default Home
