import {IoLogoDropbox} from 'react-icons/io'
import { FormArea } from "./authlayout.style"
const AuthLayout = ({children}:any) => {
 
 
  return (
    <div style={{backgroundColor:'#F2EEFB'}} className="sm:py-14 sm:h-screen">
        <FormArea>
            <div className="text-center mb-10">
              {/* <img src="../../assets/logo.png" alt="" /> */}
              <IoLogoDropbox size={45} color="#7F56D9" />
              <div className="font-bold text-3xl text-[#7F56D9]">AGILE</div>
            </div>
            <div>
              {children}
            </div>
        </FormArea>
    </div>
  )
}

export default AuthLayout
