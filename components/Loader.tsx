// @ts-nocheck
import ContentLoader, { Rect } from "react-content-loader/native"

const Loader = (props) => (
  <ContentLoader 
    speed={0.8}
    width={400}
    height={260}
    viewBox="0 0 400 260"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    
    <Rect x="5" y="8" rx="3" ry="3" width="146" height="20" /> 
    <Rect x="5" y="36" rx="12" ry="12" width="355" height="175" /> 
    <Rect x="173" y="8" rx="10" ry="10" width="78" height="20" /> 
    <Rect x="5" y="228" rx="4" ry="4" width="275" height="11" /> 
    <Rect x="290" y="220" rx="15" ry="15" width="56" height="27" />
  </ContentLoader>
)

export default Loader

