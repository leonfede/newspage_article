import "./tabNavigator.css";

export default function TabNavigator({ targets }) {
  return (
      <div className="tabsContainer">
      {
        targets.map((target, index) => (
          <a
            key={index}
            href={`#${ target.targetElement }`} 
            className="tabElement" 
            style={{ backgroundColor: target.color}}
          >
            <div className="tabContent">
              <span className="tabTitle">{ target.title }</span>
            </div>
          </a>
        ))
      }
    </div>
  );
}
