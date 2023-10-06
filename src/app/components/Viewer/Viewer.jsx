import Content from "../Content/Content"
import { Navigator } from "../Navigator/Navigator"

export const Viewer = () => {
  return (
    <section className="section-container">
      <div className="primary-container">
        <Navigator/>
        <div className="main-section">
          <Content/>
        </div> 
      </div>
    </section>
  )
}
