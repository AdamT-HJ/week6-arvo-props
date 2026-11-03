import './App.css'
import WaterBottle from './components/WaterBottle'
import ProfileCard from './components/ProfileCard'

import {profileData} from './components/profiles'

function App() {
  

  return (
    <>
      <h1>WEEK 6 ARVO PROPS</h1>

      <WaterBottle 
        name="Frank Green"
        productId={123456}
        color="Mint Green"
      />

      <ProfileCard 
        name="Clark Kent"
        age={26}
        location="Metropolis"
        bio="Inconspicuous reporter and phone booth enthusiast"
      />

      <ProfileCard 
        name="Bruce Wayne"
        age={26}
        location="Metropolis"
        bio="Inconspicuous reporter and phone booth enthusiast"
      />

      <div>
        {profileData.map(({id, name, age, location, bio})=> (
          <ProfileCard 
            key={id}
            name={name}
            age={age}
            location={location}
            bio={bio}
          />
        ))}
      </div>


    </>
  )
}

export default App
