import './globals.css'
import styles from './page.module.css'
import localFont from 'next/font/local'
import { Poppins } from 'next/font/google'

const poppins = Poppins({ subsets: ['latin'], weight: ['300'] })
const brah = localFont({ src: '../fonts/BraahOne-Regular.ttf' })
const bruno = localFont({ src: '../fonts/BrunoAceSC-Regular.ttf' })

const BikePerfSpecs = {
      "Bore": "53.5 mm",
      "Clutch": "Wet Multiplate",
      "Compression Ratio": "10.0 : 1",
      "Cooling System": "Air Cooled",
      "Cylinders": "1",
      "Displacement": "109.7 cc",
      "Emission Standard": "BS6",
      "Fuel Delivery System": "Fuel Injection",
      "Fuel Tank Capacity": "10 litres",
      "Fuel Type": "Petrol",
      "Gear Shifting Pattern": "All 4 Up",
      "Ignition": "CDI",
      "Max Power": "8.08 bhp @ 7,350 rpm",
      "Max Torque": "8.7 Nm @ 4,500 rpm",
      "Mileage - ARAI": "--",
      "Mileage - Owner Reported": "68 kmpl",
      "Reserve Fuel Capacity": "1.6 litres",
      "Riding Range": "--",
      "Spark Plugs": "1 Per Cylinder",
      "Stroke": "48.8 mm",
      "Top Speed": "90 Kmph",
      "Transmission": "4 Speed Manual",
      "Transmission Type": "Chain Drive",
      "Valves Per Cylinder": "2"
    }
const BikeDimensionSpecs = {
      "Chassis Type": "Single Cradle Tubular Frame",
      "Ground Clearance": "172 mm",
      "Kerb Weight": "115 kg",
      "Overall Height": "1,080 mm",
      "Overall Length": "1,984 mm",
      "Overall Width": "750 mm",
      "Seat Height": "785 mm",
      "Wheelbase": "1,260 mm"
    }
const BikeBrakeSpecs = {
  "Braking System": "SBT",
  "Calliper Type": "No",
  "Front Brake Size": "130 mm",
  "Front Brake Type": "Drum",
  "Front Suspension": "Telescopic (Oil damped)",
  "Front Tyre Pressure (Rider & Pillion)": "25 psi",
  "Front Tyre Pressure (Rider)": "25 psi",
  "Front Tyre Size": "2.75 X 17\" 41P",
  "Front Wheel Size": "17 inch",
  "Radial Tyres": "No",
  "Rear Brake Size": "110 mm",
  "Rear Brake Type": "Drum",
  "Rear Tyre Pressure (Rider & Pillion)": "36 psi",
  "Rear Tyre Pressure (Rider)": "32 psi",
  "Rear Tyre Size": "3.0 X 17\" 50P",
  "Rear Wheel Size": "17 inch",
  "Tyre Type": "Tubeless",
  "Wheel Type": "Alloy"
}


export default function Home() {
  function ArticleDescription({title, innerMsg}) {
    return (
      <div className={[styles.box_container, styles.description_container].join(" ")}>
          <span className={[styles.title, bruno.className].join(" ")}>{title}</span>
          <span className={[styles.details, poppins.className].join(" ")}>{innerMsg}</span>
      </div>
    )
  }
  function SpecificSpecification({title, innerMsg}) {
    return (
      <div className={[styles.specific_specification, poppins.className].join(" ")}>
        <span className={styles.specs_title}>{title}</span>
        <span className={styles.specs_inner}>{innerMsg}</span>                    
      </div>
    )
  }
  function ReturnLoopedComponents(data) {
    let variable = []
    for (const key in data) {
      variable.push(<SpecificSpecification key={key} title={key} innerMsg={data[key]} />)
    }
    return variable
  }
  return (
    <>
      <body>
        <article>
            <div className={styles.navbar}>
                <span className={[styles.bike_name,  styles.title, bruno.className].join(" ")}>TVS Honda Star City Plus</span>
                <div className={styles.navbar_inner}>
                  <span className={[styles.developer_name, brah.className].join(" ")}>Yuvaraja.M CSE-B</span>
                  <span className={[styles.developer_name, brah.className].join(" ")}>1st Year BM Assignment</span>
                </div>
                <a href="https://bm.yuvaraja28.me" className={[styles.developer_name, styles.link, brah.className].join(" ")}>https://bm.yuvaraja28.me</a>
            </div>
        </article>
        <article>
            <div className={[styles.box_container, styles.bike_container].join(" ")}>
                <span className={[styles.title, bruno.className].join(" ")}>Showcase</span>
                <div className={styles.bike_images}>
                  <img src="/images/front.jpg" />
                  <img src="/images/side.jpg" />
                  <img src="/images/back.jpg" />
                </div>
            </div>
        </article>
        <article className={[styles.description_article_row].join(" ")}>
          <ArticleDescription title={"Description"} innerMsg={"The TVS Star City Plus is an ideal commuter bike for urban conditions designed and manufactured by TVS Motor Company. The bike also gets premium features as well as a stylish design language. The engine delivers an impressive mileage and the maintenance of the bike is very low. The TVS Star City Plus is suitable for those who are looking for a stylish commuter in the 110cc segment."} />
        </article>
        <article className={[styles.description_article_row].join(" ")}>
          <ArticleDescription title={"Engine Performance"} innerMsg={"The TVS Star City Plus draws power from a 109.7cc air-cooled, single-cylinder engine that produces 8.2bhp at 7,000rpm and 8.7Nm of torque at 5,000rpm. The engine comes mated to a 4-speed gearbox."} />
          <ArticleDescription title={"Mileage"} innerMsg={"The TVS Star City Plus delivers a claimed mileage of 86km/litre. But we expect the motorcycle to return a mileage of around 70km/litre in real-world riding conditions."} />
        </article>
        <article className={styles.description_article_column}>
          <div className={[styles.box_container].join(" ")}>
            <span className={[styles.title, bruno.className].join(" ")}>Power, Performance</span>
            <div className={styles.specification_container}>
              {ReturnLoopedComponents(BikePerfSpecs).map(s => s)}
            </div>
          </div>
          <div className={[styles.box_container].join(" ")}>
            <span className={[styles.title, bruno.className].join(" ")}>Dimensions, Chassis</span>
            <div className={styles.specification_container}>
              {ReturnLoopedComponents(BikeDimensionSpecs).map(s => s)}
            </div>
          </div>
          <div className={[styles.box_container].join(" ")}>
            <span className={[styles.title, bruno.className].join(" ")}>Brakes, Wheels, Suspension</span>
            <div className={styles.specification_container}>
              {ReturnLoopedComponents(BikeBrakeSpecs).map(s => s)}
            </div>
          </div>
        </article>
      </body>
    </>
  )
}
