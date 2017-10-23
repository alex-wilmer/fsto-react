import React from 'react'
import s from 'styled-components'
import {
  BlockQuote,
  Cite,
  Deck,
  Heading,
  ListItem,
  List,
  Notes,
  Quote,
  Layout,
  Slide,
  Text,
  Fill,
  CodePane,
} from 'spectacle'
import createTheme from 'spectacle/lib/themes/default'
import App from './App'

require('normalize.css')
require('spectacle/lib/themes/default/index.css')

const theme = createTheme(
  {
    primary: 'white',
    secondary: '#1F2022',
    tertiary: '#03A9FC',
    quartenary: '#CECECE',
  },
  {
    primary: 'Helvetica',
    secondary: 'Montserrat',
  },
)

let T = s.span`
  font-family: 'Montserrat', sans-serif;
  font-size: 50px;
`

let Title = s(T)`
  font-size: 62px;
`

let Aux = p => p.children

let Dbr = () => (
  <Aux>
    <br />
    <br />
  </Aux>
)

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck theme={theme} progress="none">
        <Slide key="part1" bgColor="primary">
          <div style={{ borderBottom: '2px solid', paddingBottom: 20 }}>
            <Title>
              Organizing <br /> React Applications
            </Title>
          </div>
          <div style={{ marginTop: 15 }}>
            <T>The Five Levels To React Enlightenment</T>
          </div>
          <br />
          <T>Alex Wilmer - @benevolentNinja</T>
        </Slide>
        <Slide
          bgDarken={0.35}
          bgImage="https://www.thebestbrainpossible.com/wp-content/uploads/2015/12/150227-brain-world.png"
        >
          <div style={{ textAlign: 'left' }}>
            <T style={{ fontSize: 90, color: 'white', marginRight: 200 }}>
              <Dbr />
              <Dbr />
              Improving our Mental Model
            </T>
          </div>
          <Notes>
            I've been writing JavaScript heavy applications for about five years
            now, and you might be able to say i've developed a bit a "framework
            problem"
          </Notes>
        </Slide>
        <Slide>
          <img
            style={{ transform: 'scale(1.4)' }}
            src="https://i.imgflip.com/1y1wv4.jpg"
          />
          <Notes>
            <p>
              where I have to try every new framework that I see on reddit and
              hackernews. And generally speaking there's some conventional
              wisdom that comes with each framework about how you should
              organize your app...
            </p>
          </Notes>
        </Slide>
        <Slide bgColor="#2d2932">
          <img
            src="https://i.imgur.com/pB2dzzj.png"
            style={{ width: '800px' }}
          />
          <Notes>folder structure naming conventions for files</Notes>
        </Slide>
        <Slide>
          <img
            style={{ transform: 'scale(2.7)' }}
            src="
          http://gwb.blob.core.windows.net/dlussier/WindowsLiveWriter/MVVMComparedToMVCandMVP_EFCB/image_thumb_1.png"
          />
          <Notes>
            core concerns of a given class or module
            <Dbr />and one common theme I've found is that instead of organizing
            around the specific, intrinsic nature of the application itself,
          </Notes>
        </Slide>
        <Slide>
          <img
            style={{ transform: 'scale(1.4)' }}
            src="https://i.imgflip.com/1y1z9q.jpg"
          />
          <Notes>
            <p>
              things tend to be organized in "the framework way"
              <Dbr />
              <Dbr />
              like "the angular way" or "the rails way"
            </p>
          </Notes>
        </Slide>
        <Slide>
          <img src="https://s3.amazonaws.com/titlepages.leanpub.com/tr5w/hero?1484762197" />
          <Notes>
            The rails way being an entire book with many sequels and editions
            <Dbr />
            and it's not like "the framework" way is necessarily bad, it's often
            a the best possible advice available at the time.
            <Dbr />
            but I think we sometimes cling to those ideas. create bizarre
            emotional attachments to them
            <Dbr />
            and sometimes the advice is too focused on a single strategy, making
            it harder to reimagine the mental model of our app
          </Notes>
        </Slide>
        <Slide>
          <img src={process.env.PUBLIC_URL + '/dressernormal.png'} />
          <Notes>
            <p>
              consider the common, 4 drawer clothing dresser. When it comes time
              put your clothes away, you can follow conventional wisdom and
              separate similar types of clothing: socks & underwear, pants,
              shirts, capes or whatever
            </p>
          </Notes>
        </Slide>
        <Slide>
          <img src={process.env.PUBLIC_URL + '/dresserlines.png'} />
          <Notes>
            <p>
              or you could think beyond the four distinct separations and
              figuratively divide the dresser into smaller, equal parts
            </p>
          </Notes>
        </Slide>
        <Slide>
          <img src={process.env.PUBLIC_URL + '/dresserletters.png'} />
          <Notes>
            <p>and in each slot assign a fully completed outfit</p>
            <p>
              The benefit of the former way is that if you need to quickly
              assemble a new outfit, you know exactly where each individual
              piece of clothing is.
            </p>
            <p>
              The benefit of the latter way is that if you know exactly what
              outfit you're going to wear, you don't need to assemble anything
              at all.
            </p>
          </Notes>
        </Slide>
        <Slide>
          <img src={process.env.PUBLIC_URL + '/continuum.png'} />
          <Notes>
            <p>
              and it can pose a significant challenge to strike a balance
              between these two seemingly incompatible strategies,
            </p>
            <p>
              are these distinct points that requires a leap to travel between
              or can this be viewed as a continuum that can be gracefully slide
              along.
            </p>
            <p>
              This difficulty is greatly exaggerated by the fact that drawers
              and clothing are real physical things but codebases don't suffer
              from the same limitations
            </p>
            <p>
              Instead of focusing on the implementation details of organization,
              we could try to improve our mental model so that we can optimize
              our perception of how things are organized.
            </p>
          </Notes>
        </Slide>
        <Slide>
          <img src={process.env.PUBLIC_URL + '/continuumtitle.png'} />
          <Notes>
            I call this "The Mental Model Continuum"{' '}
            <p>
              imagine you can start on one side of the contiuum and as you wave
              your hand over to the other side, the contents of the dresser
              slowly transform into partially assembled outfits until you've
              reached the other side and have a set of fully complete,
              seasonally appropriate outfits ready to go
            </p>
          </Notes>
        </Slide>
        <Slide>
          <img src={process.env.PUBLIC_URL + '/contcomponent.png'} />
          <Notes>
            <p>
              Now imagine your fully complete outfits as well tailored
              application features and as your wave your hand back to the other
              side of the continuum, the individual components start to break
              off until you have a diverse toolbox of designs and behaviours,
              ready to be reassembled for new features down the road
            </p>
            <p>
              I think we should do whatever we can to write our an apps in a way
              that facilitates thinking about their structure at various levels
              of abstraction, as quickly and effortlessly as possible.
            </p>
          </Notes>
        </Slide>
        <Slide
          bgDarken={0.35}
          bgImage="https://s-i.huffpost.com/gen/3358294/images/o-INFLUENZA-VIRUS-facebook.jpg"
        >
          <div style={{ textAlign: 'right' }}>
            <T style={{ fontSize: 90, color: 'white' }}>
              <Dbr />
              <Dbr />
              React, the Virus
            </T>
          </div>
        </Slide>
        <Slide>
          <img src="http://www.ktnet.oicr.on.ca/img/OICRlogo.gif" />
          <Notes>
            <p>
              I work here at the Ontario Institute for Cancer Research as a
              developer
            </p>
          </Notes>
        </Slide>
        <Slide bgImage="https://i.imgur.com/Fu8SUOV.jpg">
          <Notes>
            <p>
              and I spend the majority of my time working on this project, the
              Genomic Data Commons. It's a set of applications designed to
              facilitate the sharing and discovery of genomic data related to
              cancer research.
            </p>
            <p>I'm also proud to say that it's</p>
          </Notes>
        </Slide>
        <Slide bgImage={process.env.PUBLIC_URL + '/nong.png'}>
          <Notes>
            <p>
              *not* an angular application, even though it did start out that
              way, and for years prior, I was probably the biggest angular
              evangelist amongst my colleagues and friends
            </p>
          </Notes>
        </Slide>
        <Slide bgImage={process.env.PUBLIC_URL + '/ngsp.png'}>
          <Notes>
            <p>
              Before joining OICR I worked for a dev shop making sharepoint
              portals, where I meticulously "upgraded" all of their front end
              code to angular.
            </p>
          </Notes>
        </Slide>
        <Slide bgImage={process.env.PUBLIC_URL + '/ngspgrumpy.png'}>
          <Notes>
            <p>
              My cooworkers hated me for it at the time, but I hear they now
              start all their new projects with angular and can't remember what
              it was about asp.net that they liked so much.
            </p>
            <p>
              likely one of the things they struggled with was angular's
              peculiar, and arguably overly complex way to organize things
            </p>
          </Notes>
        </Slide>
        <Slide>
          <img
            style={{ transform: 'scale(1.4)' }}
            src="https://image.slidesharecdn.com/dreamfactory-angular-140312004713-phpapp02/95/angularjs-and-rest-made-simple-23-638.jpg?cb=1397087125"
          />
          <Notes>
            <p>
              Applications, or fragments of applications, would be defined as
              modules consisting of models, or views, stateful services, and the
              controllers that glued the two together using a magical object
              called scope.
            </p>
          </Notes>
        </Slide>
        <Slide>
          <pre style={{ fontSize: '2em' }}>{`<my-plugin></my-plugin>`}</pre>
          <Notes>
            <p>
              angular also had the ability to extend HTML with something called
              directives, which you could think of as mini angular plugins that
              you can attach to the dom
            </p>
            <p>
              over time directives started to show their true strength as
              reusable components
            </p>
          </Notes>
        </Slide>
        <Slide>
          <img
            style={{ transform: 'scale(1.8)' }}
            src="https://i.stack.imgur.com/wooNr.png"
          />
          <Notes>
            <p>
              even if they were one of the weirdest APIs to remember and passing
              scopes between them had a nightmarish quality
            </p>
          </Notes>
        </Slide>
        <Slide>
          <img
            style={{ transform: 'translateX(-14%)' }}
            src={process.env.PUBLIC_URL + '/myngmodel.png'}
          />
          <Notes>
            <p>
              in my mental model of "the angular way", on the left hand side of
              the continuum you have these well defined shelves, grouped by
              their purpose. these get combined to make directives, which are
              then combined to make modules.
            </p>
            <p>then a collection of modules form the final app</p>
          </Notes>
        </Slide>
        <Slide bgImage="https://fsmedia.imgix.net/43/e9/9e/ac/0c64/4d0e/a2bc/dda1d61a31db/on-fire.jpeg" />
        <Slide bgImage="http://xpagexplorer.org/unicornwpfolder/wp-content/uploads/ReactJS.jpg">
          <Notes>
            <p>
              Then in late 2014 I discovered react and react had a much more
              simple propsition:
            </p>
          </Notes>
        </Slide>
        <Slide>
          <img
            style={{ transform: 'scale(1.5)' }}
            src="https://i.imgflip.com/1y2c70.jpg"
          />
          <Notes>
            <p>there shall be only... components!</p>
          </Notes>
        </Slide>
        <Slide>
          <img src={process.env.PUBLIC_URL + '/component.png'} />
          <Notes>
            <p>
              they can have state. they can receive props. they'll have DOM
              based lifecycle hooks, they must be renderable, and you can nest
              them
            </p>
          </Notes>
        </Slide>
        <Slide>
          <img src={process.env.PUBLIC_URL + '/component.png'} />
          <h1 style={{ color: 'red', transform: 'translateY(-150px)' }}>
            That's all, folks!
          </h1>
          <Notes>
            <p>but that's it. that's the whole api.</p>
            <o>
              no perscriptions about anything else, other than the implied
              notion that your application is going to end up as a homogenous
              tree of a singular units, react components.
            </o>
            <p>
              I, like many of you probably, was intrigued by this idea.. and
              skeptical of course, . After all, this seemed to be going directly
              against a decade of conventional wisdom which said keeping content
              and behaviour separated.
            </p>
          </Notes>
        </Slide>
        <Slide bgImage="https://i.imgur.com/V1D499r.png">
          <Notes>
            <p>
              There's even a great little tidbit in the w3 wiki on standards and
              best practices
            </p>
          </Notes>
        </Slide>
        <Slide bgImage="https://i.imgur.com/xhzxiPp.png">
          <Notes>
            <p>
              If you scroll down one of the reasons listed reads: reads: "It’s
              just good practice: This is a bit of a “because I said so” reason,
              but talk to any professional standards-aware web developer or
              designer, and they’ll tell you that separating content, style, and
              behaviour is the best way to develop a web application.
            </p>
            <p>Naturally, I had to give it a shot. </p>
          </Notes>
        </Slide>
        <Slide bgImage={process.env.PUBLIC_URL + '/min.png'}>
          <Notes>
            <p>
              Also the React homepage told me to "give it 5 minutes", so I
              deciced to rebuild the frontend of my companies website with it.
            </p>
          </Notes>
        </Slide>
        <Slide bgImage={process.env.PUBLIC_URL + '/moremin.png'}>
          <Notes>
            <p>
              It did not take 5 minutes. It was a very slow, confusing couple of
              weeks before I was back on par.
            </p>
            <p>
              There just didn't seem to be enough documentation or practical
              examples to follow.
            </p>
          </Notes>
        </Slide>
        <Slide>
          <h1>Thinking In React</h1>
          <Dbr />
          <img
            style={{ transform: 'scale(1.4)' }}
            src="https://reactjs.org/static/eb8bda25806a89ebdc838813bdfa3601-812b8.png"
          />
          <Notes>
            <p>
              All we got was this "thinking in react" page which describes the
              process of breaking down a feature into smaller parts.
            </p>
            <p>
              which on one hand seems like a fairly obvious task, and on the
              other a completely useless one.
            </p>
          </Notes>
        </Slide>
        <Slide bgImage={process.env.PUBLIC_URL + '/widget.png'}>
          <Notes>
            <p>
              I used to have a single node like this representing some widget
              like a newsfeed or a weather box.
            </p>
          </Notes>
        </Slide>
        <Slide bgImage={process.env.PUBLIC_URL + '/morewidget.png'}>
          <Notes>
            <p>and now I have a tree of nodes that make up a single widget.</p>
          </Notes>
        </Slide>
        <Slide bgImage={process.env.PUBLIC_URL + '/widgetgrumpy.png'}>
          <Notes>
            <p>
              In practice this only seemed to fruther increase the amount of
              frustration by my team members who now had to sift through dozens
              of more files than they needed to before.
            </p>
          </Notes>
        </Slide>
        <Slide>
          <img
            style={{ transform: 'scale(1.5)' }}
            src={process.env.PUBLIC_URL + '/tree.png'}
          />
          <Notes>
            <p>
              But when you zoomed out to see the entire application, it was
              considerably less complex than our angular apps.
            </p>
          </Notes>
        </Slide>
        <Slide>
          <img src={process.env.PUBLIC_URL + '/reactmodel.png'} />
          <Notes>
            <p>
              My mental model for react is pretty much as straightforward as it
              gets. on the left side you have components, on the right side you
              have components. and more components until you reach a root node
              which is the app.
            </p>
          </Notes>
        </Slide>
        <Slide bgImage="https://i.imgur.com/Fu8SUOV.jpg">
          <Notes>
            <p>
              So when I started working on the GDC Portal, a considerably well
              organized, modular Angular codebase, I was frustrated by how
              sluggish I was trying to fix bugs and adding new features.
            </p>

            <p>
              Angular and I had good times. But after I started using React I
              just didn't feel the same way about her anymore
            </p>
          </Notes>
        </Slide>
        <Slide bgImage={process.env.PUBLIC_URL + '/feels.png'} />
        <Slide>
          <img
            style={{
              width: '900px',
              transform: 'scale(1.3)',
            }}
            src={process.env.PUBLIC_URL + '/struct.png'}
          />
          <Notes>
            <p>
              It turned out that the problem wasn't the way the files or modules
              were organized, in fact it was the best I had ever seen. it was
              the way the runtime was organized.. the mental model. Also this
              was a significantly more complex application than I had worked on
              before and angular's own complexity was compounding on itself. a
              very leaky abstraction one might say
            </p>
          </Notes>
        </Slide>
        <Slide bgImage="http://blog.abodit.com/images/uploads/2014/11/HomeAutomation3.png">
          <Notes>
            <p>
              features were skewed across modules, and communication between
              stateful services was often hidden in deeply nested, deeply buried
              event channels.
            </p>
          </Notes>
        </Slide>
        <Slide bgImage="https://blog.waylay.io/content/images/2017/07/tree.gif">
          <Notes>
            <p>
              The React codebases we were working on were also complex in terms
              of what they actually did, but by comparison, It felt like an
              addition problem instead of a calculus one.
            </p>
          </Notes>
        </Slide>
        <Slide bgColor="#191d1e">
          <img
            style={{
              width: '900px',
              transform: 'scale(1.3)',
            }}
            src={process.env.PUBLIC_URL + '/nodov.png'}
          />
          <Notes>
            <p>
              so one day In a bout of frustation, trying to find a bug in an
              angular template
            </p>
          </Notes>
        </Slide>
        <Slide bgColor="#191d1e">
          <img
            style={{
              width: '900px',
              transform: 'scale(1.3)',
            }}
            src={process.env.PUBLIC_URL + '/dov.png'}
          />
          <Notes>
            <p>
              I was like.. that's it! this template is now a React Component.
            </p>
          </Notes>
        </Slide>
        <Slide bgColor="#191d1e">
          <img
            style={{
              width: '900px',
              transform: 'scale(1.3)',
            }}
            src={process.env.PUBLIC_URL + '/homereact.png'}
          />
          <Notes>
            <p>
              and that's exactly what I did. I made a presentational component
              and in the angular controller, call react dom.render passing only
              one prop.. angular's scope. and so the infection began
            </p>
          </Notes>
        </Slide>
        <Slide>
          <img
            style={{ transform: 'scale(1.4)' }}
            src={process.env.PUBLIC_URL + '/reng.png'}
          />
          <Notes>
            <p>
              The angular codebase, piece by piece, was being transformed into
              react components
            </p>
          </Notes>
        </Slide>
        <Slide>
          <img
            style={{ transform: 'scale(1.4)' }}
            src={process.env.PUBLIC_URL + '/reng1.png'}
          />
          <Notes>
            <p>
              First using simple presentational components to replace templates.
            </p>
          </Notes>
        </Slide>
        <Slide>
          <img
            style={{ transform: 'scale(1.4)' }}
            src={process.env.PUBLIC_URL + '/reng2.png'}
          />
          <Notes>
            <p>Followed by stateful components replacing services.</p>
            <p>
              and for a short time we had created a bit of a monster. but a fun
              monster -- one we were excited to keep working on
            </p>
          </Notes>
        </Slide>
        <Slide>
          <img
            style={{ transform: 'scale(1.4)' }}
            src={process.env.PUBLIC_URL + '/reng3.png'}
          />
          <Notes>
            <p>
              and eventually came the fateful day where instead of embedding
              react components in an angular app, we were spinning up a true
              react application with create-react-app.
            </p>
          </Notes>
        </Slide>
        <Slide>
          <img
            style={{ transform: 'scale(1.3)', width: '600px' }}
            src={process.env.PUBLIC_URL + '/reng5.png'}
          />
          <Notes>
            <p>
              with some still unconverted angular directives bootstrapped inside
              react.
            </p>
          </Notes>
        </Slide>
        <Slide>
          <T>softeng.oicr.on.ca</T>
          <Dbr />
          <Dbr />
          <Dbr />
          <img
            style={{ transform: 'scale(1.8)', width: '600px' }}
            src={process.env.PUBLIC_URL + '/why.png'}
          />
          <Notes>
            <p>
              if you want to know more about that, I highly recommend visting
              the OICR software engineering blog at softeng.oicr.on.ca and
              reading this rather entertaining article by my collegue chang wang
              on embedding angular directives inside react components.
            </p>
          </Notes>
        </Slide>
        <Slide bgImage="https://i.imgur.com/Fu8SUOV.jpg" bgDarken={0.3}>
          <img src="http://azuretwilight.org/filedata/fetch?id=222" />
          <Notes>
            <p>
              it took the summer and several more months to make the move, but
              we did it and were able to convince our bosses that it was a good
              idea. and along the way we learned a great deal about the nature
              of our app, what types of things we can do to improve on it, and
              importantly, we left with an clearer mental model of the codebase
              and how the runtime was organized
            </p>
          </Notes>
        </Slide>
        <Slide bgColor="#191d1e">
          <img
            style={{ transform: 'scale(1.8)', width: '600px' }}
            src={process.env.PUBLIC_URL + '/modern.png'}
          />
          <Notes>
            <p>
              in the end the winning strategy for us was to physically organize
              our files on a feature by feature basis. Defining what a feature
              is, where to draw the boundaries can be tricky and it's up to you
              make those particular distinctions
            </p>
            <p>
              but I would like to emphasize that the file placement and folder
              structure are only implementation details and it would be great if
              our our editors and our toolings abstracted the placement and
              locating of files away for us. to get us to a point where we can
              view the codebase in many different ways on the fly
            </p>
            <p>That's my dream anyways.</p>
          </Notes>
        </Slide>
        <Slide bgImage="http://www.heathershumaker.com/blog/wp-content/uploads/2013/09/rule10_final-Conflict-1024x810.jpg">
          <div style={{ position: 'relative', top: -40 }}>
            <T style={{ fontWeight: 'bold' }}>
              1st Level of React Enlightenment:
            </T>
            <br />
            <T style={{ fontWeight: 'bold' }}>
              Learning How to Share{' '}
              <span style={{ fontWeight: 'normal' }}>(state)</span>
            </T>
          </div>
          <Dbr />
          <Dbr />
          <Dbr />
          <Dbr />
          <Dbr />
          <Dbr />
          <Dbr />
          <Dbr />
          <Dbr />
          <Dbr />
          <Dbr />
          <Dbr />
          <Notes>
            <p>
              keeping different parts of an application in sync is arguably the
              most common "hard" problem. Since JavaScript is single threaded,
              the problem usually boils down preventing duplication and
              wrangling asynchronous functions
            </p>
          </Notes>
        </Slide>
        <Slide>
          <img
            style={{ transform: 'scale(1.8)', width: '600px' }}
            src={process.env.PUBLIC_URL + '/share1.png'}
          />
          <Notes>
            <p>
              In Angular, and other MV type frameworks, if you need different
              parts of your application to share or modify the same piece of
              state
            </p>
          </Notes>
        </Slide>
        <Slide>
          <img
            style={{ transform: 'scale(1.8)', width: '600px' }}
            src={process.env.PUBLIC_URL + '/share2.png'}
          />
          <Notes>
            <p>
              a service can easily connect them, no matter where they are
              "physically" located in the runtzime.
            </p>
          </Notes>
        </Slide>
        <Slide>
          <img
            style={{ transform: 'scale(1.8)', width: '600px' }}
            src={process.env.PUBLIC_URL + '/share3.png'}
          />
          <Notes>
            <p>
              including skipped nodes, leaving certain parts of the UI unaware
              of application state changes
            </p>
          </Notes>
        </Slide>
        <Slide>
          <img
            style={{ transform: 'scale(1.8)', width: '600px' }}
            src={process.env.PUBLIC_URL + '/sadshare.png'}
          />
          <Notes>
            <p>
              In React on the other hand, you'll immediately feel the strange
              discomfort of being unable to solve "sibling communcation" the
              same way since nodes cannot have multple parents, and sibilngs
              cannot direclty communicate with eachother,
            </p>
            <p>
              This is the first the situation where you learn the first rule of
              react
            </p>
          </Notes>
        </Slide>
        <Slide>
          <img
            style={{ transform: 'scale(1.8)', width: '600px' }}
            src={process.env.PUBLIC_URL + '/share6.png'}
          />
          <Notes>
            Nodes that need to share, need to share through a common ancestor
          </Notes>
        </Slide>
        <Slide>
          <img
            style={{ transform: 'scale(1.8)', width: '600px' }}
            src={process.env.PUBLIC_URL + '/god.png'}
          />
          <Notes>
            <p>
              once this realization really sets in, shared state tends to float
              to the top of the tree, creating a sort of "god module", that
              contains all of the relevant state for any given child node.
            </p>
          </Notes>
        </Slide>

        <Slide
          bgDarken={0.4}
          bgImage="http://www.confessionsofaparent.com/wp-content/uploads/2014/08/497640715.jpg"
        >
          <div style={{ position: 'relative', top: -40 }}>
            <T style={{ fontWeight: 'bold', color: 'white', fontSize: '80px' }}>
              2nd Level of React Enlightenment:
            </T>
            <br />
            <br />
            <br />
            <T style={{ fontWeight: 'bold', color: 'white', fontSize: '80px' }}>
              Raising Well Behaved Children
            </T>
          </div>
          <Notes>
            <p>
              As the number of nodes in the tree increases this inevitably leads
              to understanding the second level of react Enlightenment
            </p>
            <p>
              creating family friendly non-interfering, un-assuming intermediate
              components.
            </p>
          </Notes>
        </Slide>

        <Slide>
          <img
            style={{ transform: 'scale(1.8)', width: '600px' }}
            src={process.env.PUBLIC_URL + '/middle.png'}
          />
          <Notes>
            <p>
              nodes that forward information, and don't depend on their
              ancestors to have a purpose.
            </p>
          </Notes>
        </Slide>
        <Slide>
          <img
            style={{ transform: 'scale(1.8)', width: '600px' }}
            src={process.env.PUBLIC_URL + '/middlechild.png'}
          />
          <Notes>
            <p>
              Every component is in some way, responsible for all of its
              children
            </p>
          </Notes>
        </Slide>
        <Slide>
          <img
            style={{ transform: 'scale(1.8)', width: '600px' }}
            src={process.env.PUBLIC_URL + '/badchild2.png'}
          />
          <Notes>
            <p>
              . It can easily disrupt a large portion of an application by
              forgetting to, or improperly passing information along, A broken
              telephone.
            </p>
          </Notes>
        </Slide>
        <Slide>
          <img
            style={{ transform: 'scale(1.8)', width: '600px' }}
            src={process.env.PUBLIC_URL + '/badchild.png'}
          />
          <Notes>
            <p>
              They can also disrupt their descendants by being too trustworthy
              of their ancestors and blindly accessing objects or calling
              functions and throwing runtime errors.
            </p>
          </Notes>
        </Slide>
        <Slide>
          <img
            style={{ transform: 'scale(1.8)', width: '600px' }}
            src={process.env.PUBLIC_URL + '/error.png'}
          />
          <Notes>
            <p>
              This makes it very difficult to move nodes and their subtrees
              around, both physically and in the mental model.
            </p>
          </Notes>
        </Slide>
        <Slide>
          <img
            style={{ transform: 'scale(1.8)', width: '600px' }}
            src={process.env.PUBLIC_URL + '/movefrom.png'}
          />
          <Notes>
            <p>
              We want to write components to that makes it easy cut a branch
            </p>
          </Notes>
        </Slide>
        <Slide>
          <img
            style={{ transform: 'scale(1.8)', width: '600px' }}
            src={process.env.PUBLIC_URL + '/moveto.png'}
          />
          <Notes>
            <p>and paste it somewhere else</p>
          </Notes>
        </Slide>
        <Slide bgColor="#191d1e">
          <img
            style={{ transform: 'scale(1.8)', width: '600px' }}
            src={process.env.PUBLIC_URL + '/nicebutton.png'}
          />
          <Notes>
            <p>
              This feels weird at first, but a decent intermediate component has
              at least: default props, and passes unused props to its own
              children
            </p>
            <p>
              A very good citizen node will include propType warnings, unit
              tests, type annotations with flow or typescript.. or maybe even
              Error Boundaries which are included in React 16.
            </p>
          </Notes>
        </Slide>
        <Slide
          bgImage="https://blog.waylay.io/content/images/2017/07/tree.gif"
          bgDarken={0.7}
        >
          <h1 style={{ color: 'white' }}>so.. many.. components</h1>
          <Notes>
            <p>
              Although it may seem tedious to do all this work for every single
              component.. being sloppy at this level is almost guaranteed to
              cause more havoc as nodes are added and rearranged.
            </p>
          </Notes>
        </Slide>
        <Slide>
          <h2 style={{ color: 'rgb(110, 101, 125)', fontWeight: 'normal' }}>
            Recap:
          </h2>
          <h1>First two levels of React enlightenment</h1>
          <h2>
            <ul>
              <li>Shared state belongs to a common ancestor</li>
              <li>Non-disrupting intermediate nodes</li>
            </ul>
          </h2>
          <Notes>
            <p>
              But if you stay diligent and follow just these two core lessons
            </p>
            <p>
              According to me, the apps you write will be easy to understand..
              easy to debug and easy to extend
            </p>
          </Notes>
        </Slide>

        <Slide
          bgImage="https://static.comicvine.com/uploads/original/11115/111152067/3966792-neo.jpg"
          bgDarken={0.7}
        >
          <div>
            <T style={{ color: 'white' }}>3rd Level of React Enlightenment</T>
            <Dbr />
            <Dbr />
            <T style={{ color: 'white' }}>React-fu</T>
            <Dbr />
            <T style={{ color: 'white', fontStyle: 'italic' }}>
              Know your Abstractions
            </T>
            <Dbr />
            <Dbr />
            <Dbr />
            <Dbr />
          </div>
          <Notes>
            <p>
              There comes a point where components that mix behaviour and
              content become unruly, or hard to re-use. Tightly coupled to
              itself, if you will.
            </p>
          </Notes>
        </Slide>

        <Slide bgColor="#333">
          <CodePane
            lang="jsx"
            style={{
              color: `white`,
              fontSize: `1.7rem`,
              textAlign: `left`,
              marginLeft: `-8rem`,
              marginTop: `-3rem`,
            }}
            source={`
class ProfilePage extends React.Component {

  state = { user: null }

  componentDidMount() {
    getUser().then(user => this.setState({ user }))
  }

  render() {
    return (
      <div>
        {this.state.user && (
          <h1 style={{ color: this.state.user.favoriteColor }}>
            {this.state.user.name}
          </h1>
        )}
      </div>
    )
  }
}`}
          />
          <Notes>
            <p>
              Imagine a user navigating to their profile page.. on page load a
              request is made to get user data and display the results
            </p>
            <p>
              Sometime later you need to make the same request on a different
              page, like a team members page.
            </p>
          </Notes>
        </Slide>

        <Slide>
          <img
            style={{ transform: 'scale(1.8)', width: '600px' }}
            src={process.env.PUBLIC_URL + '/profile.png'}
          />
          <Notes>
            <p>
              Where do you check to see if the request has already been made?
              How can you write this in a way so you don't need to duplicate the
              same code in a different component?
            </p>
          </Notes>
        </Slide>

        <Slide>
          <img
            style={{ transform: 'scale(1.8)', width: '600px' }}
            src={process.env.PUBLIC_URL + '/sung.png'}
          />
          <Notes>
            <p>
              Going by the first rule of react, the App, or common ancestor
              component should take care of this
            </p>
            <p>
              But this seems like a perfect time to break that rule since there
              are other branches of the app tree that will never need to know
              about that particular data
            </p>
            <p>Luckily, React has a number of tricks up its sleeve</p>
          </Notes>
        </Slide>

        <Slide>
          <img
            style={{ transform: 'scale(1.8)', width: '600px' }}
            src={process.env.PUBLIC_URL + '/getdata.png'}
          />
          <Notes>
            <p>
              We could create a component that does nothing else except fetch
              some data from our api, and hand it off to its children, who want
              this data to display
            </p>
            <p>
              We could reuse this component any page or subcomponent that needs
              this data
            </p>
          </Notes>
        </Slide>

        <Slide>
          <img
            style={{ transform: 'scale(1.8)', width: '600px' }}
            src={process.env.PUBLIC_URL + '/api.png'}
          />
          <Notes>
            <p>
              our data only components can receive our api interface which
              either makes a request or returns data from its cache. this will
              allow any component to request data without over fetching, and
              without needlessly passing data to components that will never use
              it
            </p>
            <p>let's brush up on our react-fu</p>
          </Notes>
        </Slide>

        <Slide bgColor="#191d1e">
          <img
            style={{
              width: '900px',
              transform: 'scale(1.3)',
            }}
            src={process.env.PUBLIC_URL + '/compose.png'}
          />
          <Notes>
            <p>
              composing components together eventually became the standard way
              of writing components on the GDC project. Business logic flows
              from top to bottom, improving readability, and small single
              purpose higher order components make it ergonomic to add and
              remove without needing to alter the rest of the component
            </p>
          </Notes>
        </Slide>

        <Slide bgColor="#191d1e">
          <img
            style={{
              width: '900px',
              transform: 'scale(1.3)',
            }}
            src={process.env.PUBLIC_URL + '/composeprod.png'}
          />
          <Notes>
            <p>this is a what a feature looks like in practice</p>
          </Notes>
        </Slide>

        <Slide>
          <h2>Low Level React - elements and renderables</h2>
          <List>
            <ListItem>Valid arguments for `createElement`</ListItem>
            <ListItem>Valid return values for `render`</ListItem>
          </List>
          <Notes>
            <p />
          </Notes>
        </Slide>

        <Slide>
          <h2>Low Level React - wrapper components</h2>
          <List>
            <ListItem>wrapping `children`</ListItem>
            <ListItem>checking child types</ListItem>
            <ListItem>passing props to `children`</ListItem>
          </List>
        </Slide>

        <Slide>
          <h2>Low Level React - callback components</h2>
          <List>
            <ListItem>calling children as a function</ListItem>
            <ListItem>injecting component</ListItem>
          </List>
        </Slide>

        <Slide>
          <h2>Low Level React - higher order components</h2>
          <List>
            <ListItem>composing behaviour</ListItem>
            <ListItem>delaying element / component type to caller</ListItem>
          </List>
        </Slide>

        <Slide>
          <h2>Low Level React</h2>
          <List>
            <ListItem>elements and renderables</ListItem>
            <ListItem>wrapper components</ListItem>
            <ListItem>callback components</ListItem>
            <ListItem>higher order components</ListItem>
          </List>
          <Notes>
            <p>
              once you get comfortable recognizing and mixing and matching these
              techniques you will be ready to deal with a world beyond react.
            </p>
          </Notes>
        </Slide>

        <Slide bgColor="black">
          <img
            style={{ transform: 'scale(1.8)', width: '600px' }}
            src="https://i.imgflip.com/1y3cp4.jpg"
          />
        </Slide>

        <Slide
          bgImage="https://cdn0.tnwcdn.com/wp-content/blogs.dir/1/files/2015/12/Gear-VR-Edit.jpg"
          bgDarken={0.7}
        >
          <div>
            <T style={{ color: 'white' }}>4th Level of React Enlightenment</T>
            <Dbr />
            <Dbr />
            <T style={{ color: 'white', fontSize: '100px' }}>Runtime control</T>
            <Dbr />
            <Dbr />
            <Dbr />
            <Dbr />
            <Dbr />
          </div>
          <Notes>
            <p>
              Probably one of the most aggravating aspects of being a software
              developer is needing rebuild or redeploy an app for something as
              trivial as changing some text or reordering components on the
              page.
            </p>
            <p>
              There's a very good reason why platforms like wordpress and
              sharepoint have stood the test of time. it's simply not an easy
              problem to solve.
            </p>
            <p>
              one of my first feelings using react, however, was that many
              aspects of a typical CMS should be easier with react components.
            </p>
          </Notes>
        </Slide>

        <Slide bgImage="https://i.imgur.com/BBO7dBI.png">
          <Notes>
            <p>
              my first real, necessary exposure to this was supporting a fork of
              the GDC data portal, which pointed to a different api and had
              redish theme instead of a blue one, and a slightly different
              routing setup
            </p>
            <p>
              In order to meet a quick deadline we literally forked the
              repository and made the necessary changes.
            </p>
            <p>
              this would inevitably bite us in the ass, as bug fixes and minor
              features were not ported over from the primary codebase
            </p>
          </Notes>
        </Slide>

        <Slide bgImage="https://i.imgur.com/BBO7dBI.png" bgDarken={0.4}>
          <img
            style={{ width: '300px' }}
            src="https://cdn.worldvectorlogo.com/logos/angular-icon-1.svg"
          />
          <Notes>
            <p>
              to add to all of this... it was a fork from the angular portal.
            </p>
            <p>
              so for some time we were maintaining both a react and angular
              version of, what is essentially, the same application
            </p>
          </Notes>
        </Slide>

        <Slide bgColor="#191d1e">
          <img
            style={{
              width: '900px',
              transform: 'scale(1.3)',
            }}
            src={process.env.PUBLIC_URL + '/root.png'}
          />
          <Notes>
            <p>
              but we figured out this was a pretty easy problem to solve using
              environment variables.
            </p>
            <p>
              when the app boots up, figure out which path down the component
              tree we want to mount
            </p>
          </Notes>
        </Slide>

        <Slide bgColor="#191d1e">
          <img src="https://cdn.shopify.com/s/files/1/1061/1924/files/Thinking_Face_Emoji.png?9898922749706957214" />
          <Notes>
            <p>
              then it dawned on me that a ton of stuff that was app specfic
              could be controlled by environment variables, and not just server
              urls and authentication modes, but the finer details of the
              features in the app, like the number of allowed request failures,
              or the transition speed of a d3 animation.
            </p>
          </Notes>
        </Slide>

        <Slide bgColor="#191d1e">
          <img src="https://cdn.shopify.com/s/files/1/1061/1924/files/Thinking_Face_Emoji.png?9898922749706957214" />
          <Notes>
            <p>
              then things really started to pick up when we realized that we
              could put that developer specific stuff into our react state!
            </p>
            <p>
              For so many months I was fiddling with props and application state
              in the codebase when I could have been fiddling with them on the
              page, or through the browser console. or even my cell phone!
            </p>
            <p>
              This proved to be crucial for our monthly demos, piloted by
              non-developers without quick access to multiple branches and
              multiple API urls
            </p>
          </Notes>
        </Slide>

        <Slide bgColor="#191d1e">
          <img
            style={{ width: '600px' }}
            src={process.env.PUBLIC_URL + '/menu.png'}
          />
          <Notes>
            <p>
              Now all it takes is clicking a link, which flips some paths on and
              off to view the modified portal
            </p>
            <p>
              Needless to say, this reduced the churn that happens between
              developers, product designers and business analysts, and even end
              users
            </p>
          </Notes>
        </Slide>

        <Slide>
          <h2>New standard for features</h2>
          <List>
            <ListItem>design should not be fixed</ListItem>
            <ListItem>props + state should exposed</ListItem>
          </List>
          <Notes>
            <p>with this in mind, I set out to accomplish a few simple goals</p>
            <p>
              First, I want to be able to rearrange the location of components
              placed on a given page
            </p>
            <p>
              Second, I want control of the props that are passed into
              components
            </p>
          </Notes>
        </Slide>

        <Slide bgImage="https://a.phcdn.se/static-live/img/reason/thor-closeup.af6481aa313e.jpg">
          <Notes>
            <p>I was inspired by reason the music software</p>
            <p>
              It has this tremendously clever design where you can add plugins
              like synthesizers and distortions in a rack like interface.
            </p>
          </Notes>
        </Slide>

        <Slide bgImage="http://www.musictech.net/wp-content/uploads/2016/07/Caption-around-the-back-you-get-your-usual-Reason-wiring-just-a-lot-more-of-it.jpg">
          <Notes>
            <p>
              then you can flip the rack around to see how everything is wired
              up and play with the connections and settings
            </p>
            <p>
              I thought to myself.. all react components should be like this
            </p>
          </Notes>
        </Slide>

        <Slide bgColor="#191d1e">
          <img src={process.env.PUBLIC_URL + '/zones.png'} />
          <Notes>
            <p>Luckily, this was easier than I expected.</p>
            <p>
              I didn't quite get to reason level of awesomeness, but I was
              succesful in making a sort of "edit" mode where features can be
              dragged and dropped in predefined zones on a layout. and props can
              be manually input in text fields, and saved to localstorage.
            </p>
          </Notes>
        </Slide>

        <Slide bgImage="https://d1o50x50snmhul.cloudfront.net/wp-content/uploads/2017/02/20153710/gettyimages-165883414.jpg">
          <Notes>
            Thinking about the app in such a dynamic way completely shook my
            mental model. I no longer think of features as being specific to my
            app, but as being in the ether, ready to be fit into whole suite of
            apps, even apps I never would have imagined could exist.
          </Notes>
        </Slide>

        <Slide bgImage={process.env.PUBLIC_URL + '/teddy.jpg'} bgDarken={0.7}>
          <div>
            <T style={{ color: 'white' }}>5th Level of React Enlightenment</T>
            <Dbr />
            <Dbr />
            <T style={{ color: 'white' }}>React needs friends...</T>
            <Dbr />
            <T style={{ color: 'white', fontStyle: 'italic' }}>
              ...it's "just a view library", after all.
            </T>
            <Dbr />
            <Dbr />
            <Dbr />
            <Dbr />
          </div>
          <Notes>
            <p>I'm going to be honest about something here</p>
            <p>about a month ago I erased this entire section.</p>
            <p>
              it was actually the section that I was initially most excited to
              talk about
            </p>
            <p>
              I've used so many of the tools in the ecosystem, flux, redux,
              mobx, freactal, relay, apollo, react-router 1, 2, 3 and 4, so many
              of the styling libraries, a lot of them in production too. but you
              know what?
            </p>
            <p>
              so many of my opinions have changed, and so have many opinions of
              many others. there seems to be a never ending debate and progress
              in the react ecosystem that it feels wrong now to have taken
              whatever small stances I did comparing these libraries. it didn't
              feel right for this talk, and there's no sense going on record
              with assurance I'll eat my words in few months
            </p>
            <p>
              I will say though, that because of the nature of react and its
              simplicity, pretty all of the tools in the ecosystem are adequate
              or fantastic at best
            </p>
            <p>
              whenever you hear or read about someone praising one library or
              lamenting another, take a deep breath and try these things out for
              yourself being buying into anything
            </p>
            <p>
              developers are a feisty bunch sometimes and I would love for the
              community to be just a little bit more cool and calm with
              eachother
            </p>
          </Notes>
        </Slide>
        <Slide bgImage={process.env.PUBLIC_URL + '/teddy.jpg'} bgDarken={0.7}>
          <div>
            <T style={{ color: 'white' }}>5th Level of React Enlightenment</T>
            <Dbr />
            <Dbr />
            <T style={{ color: 'white' }}>React needs friends...</T>
            <Dbr />
            <T style={{ color: 'white', fontStyle: 'italic' }}>
              ...it's "just a view library", after all.
            </T>
            <Dbr />
            <Dbr />
            <Dbr />
            <Dbr />
          </div>
          <Notes>
            <p>
              I definitely have a lot to say about these things though and I
              would love to talk to you guys about it, so come find me after if
              you want to get into some mad bikeshedding. Rohan's around here
              somewhere too so it should be a good time
            </p>
          </Notes>
        </Slide>
        <Slide
          bgImage={
            'http://images.contentful.com/7h71s48744nc/4w9tDGlPLiMCMkOOM0GGyY/3a570018e592ecdec25b9fc5562d2a9e/minority-report.jpg'
          }
          bgDarken={0.7}
        >
          <T style={{ color: 'white' }}>Ultimate Editor Control</T>
          <Notes>
            <p>
              Everytime I open my editor to write a new component, there's a
              strange overheard I feel when deciding where to place the file,
              simillarly when writing import statements, even when using
              absolute paths
            </p>
            <p>
              What if our editors could truly abstract that entire process? You
              know what program is surprisngly good at this?
            </p>
          </Notes>
        </Slide>
        <Slide bgImage="
            https://images.sftcdn.net/images/t_optimized,f_auto/p/c5cb6868-96bf-11e6-b1f3-00163ed833e7/3882216933/itunes-screenshot.png
          ">
          <Notes>
            <p>
              itunes, and other media players / servers like plex or dj software
            </p>
            <p>
              you basically never think about the location of a song or video,
              you simply search for what you're looking for by tags
            </p>
            <p>
              I would love to start tagging my components and finding them by
              searches, grouping them, seeing metadata about their use
            </p>
            <p>
              I think there's a lot of potential in the component organization
              space to help us see beyond the one way our apps tend to be
              arranged
            </p>
          </Notes>
        </Slide>
        <Slide>
          <T>Thanks!</T>
          <hr />
          <T>@benevolentNinja</T>
          <hr />
          <T>find me on</T>
          <br />
          <T>slack.torontojs.com</T>
        </Slide>
      </Deck>
    )
  }
}
