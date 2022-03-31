

import Typed from 'react-typed';






const Header = () => {
  return (
    <div className='header-wrapper'>
        <div className="main-info">
<h1>Bulud Xidmetleri</h1>

<Typed  
className="typed-text"
                strings={[
                  
                    'Microsoft Technology Associate',
                    'Microsoft Azure Developing Solutions Associate',
                    'Microsoft Certified Trainer']}
                    typeSpeed={40}
                    backSpeed={50}
               
                    loop >
                </Typed>

        </div>
        </div>
  )
}

export default Header