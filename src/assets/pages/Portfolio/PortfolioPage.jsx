import lerp from "lerp"
import { Suspense, useRef, useEffect, useMemo } from "react"
import { Canvas, Dom, useFrame, useLoader } from "react-three-fiber"
import { TextureLoader, LinearFilter } from "three"
import { Block, useBlock } from "./blocks"
import Diamonds from "./diamonds/Diamonds"
import state from "./store"
import { Text } from "./components/Text"
import { MultilineText } from "./components/Text"
import "./CustomMaterial"
import { Plane } from "./components/Plane"
import "./styles.modules.css"
import { Link } from "react-router-dom"


function Startup() {
  const ref = useRef()
  useFrame(() => (ref.current.material.opacity = lerp(ref.current.material.opacity, 0, 0.025)))
  return <Plane ref={ref} color="#0e0e0f" position={[0, 0, 200]} scale={[100, 100, 1]} />
}

function Content() {
  const images = useLoader(
    TextureLoader,
    state.paragraphs.map(({ image }) => image)
  )
  useMemo(() => images.forEach(texture => (texture.minFilter = LinearFilter)), [images])
  const { contentMaxWidth: w, canvasWidth, canvasHeight, desktop, mobile } = useBlock()
  return (
    <>
      <Block factor={1} offset={0}>
        <Block factor={1.2}>
          <Text left size={w * 0.08} position={[-w / 2.2, 0.5, -1]} color="#d40749">
            PORTAFOLIO
          </Text>
        </Block>
        <Block factor={1.0}>
          <Dom position={[-w / 2.2, -w * 0.08 + 0.25, -1]}>En cada línea de código {mobile ? <br /> : " "} y píxel de diseño,{mobile ? <br /> : " "} se revela el arte invisible {mobile ? <br /> : " "} de dar vida a las ideas,{mobile ? <br /> : " "}{desktop ? <br /> : " "} donde la tecnología se convierte{mobile ? <br /> : " "} en el lienzo y el programador{mobile ? <br /> : " "} en el artista,{desktop ? <br /> : " "} creando{mobile ? <br /> : " "} un universo digital donde{mobile ? <br /> : " "} los sueños se materializan.</Dom>
        </Block>
      </Block>
      <Block factor={1.2} offset={5.7}>
        <MultilineText top left size={w * 0.15} lineHeight={w / 5} position={[-w / 3.5, 0, -1]} color="#2fe8c3" text={"three\nzeroo\nzeroo"} />
      </Block>
      {state.paragraphs.map((props, index) => (
        <Paragraph key={index} index={index} {...props} image={images[index]} />
      ))}
      {state.stripes.map(({ offset, color, height }, index) => (
        <Block key={index} factor={-1.5} offset={offset}>
          <Plane args={[50, height, 32, 32]} shift={-4} color={color} rotation={[0, 0, Math.PI / 8]} position={[0, 0, -10]} />
        </Block>
      ))}
      <Block factor={1.25} offset={11}>
        <Dom className="bottom-left" position={[-canvasWidth / 2, -canvasHeight / 2, 0]}>
          Nunca pares de crear.
        </Dom>
      </Block>
    </>
  )
}

function Paragraph({ image, index, offset, factor, header, aspect, text }) {
  const { contentMaxWidth: w, canvasWidth, margin, mobile } = useBlock()
  const size = aspect < 1 && !mobile ? 0.65 : 1
  const alignRight = (canvasWidth - w * size - margin) / 2
  const pixelWidth = w * state.zoom * size
  const left = !(index % 2)
  const color = index % 2 ? "#D40749" : "#2FE8C3"
  return (
    <Block factor={factor} offset={offset}>
      <group position={[left ? -alignRight : alignRight, 0, 0]}>
        <Plane map={image} args={[1, 1, 32, 32]} shift={75} size={size} aspect={aspect} scale={[w * size, (w * size) / aspect, 1]} frustumCulled={false} />
        <Dom
          style={{ width: pixelWidth / (mobile ? 1 : 2), textAlign: left ? "left" : "right" }}
          position={[left || mobile ? (-w * size) / 2 : 0, (-w * size) / 2 / aspect - 0.4, 1]}>
          <div tabIndex={index}>{text}</div>
        </Dom>
        <Text left={left} right={!left} size={w * 0.04} color={color} top position={[((left ? -w : w) * size) / 2, (w * size) / aspect / 2 + 0.5, -1]}>
          {header}
        </Text>
        <Block factor={0.2}>
          <Text opacity={0.5} size={w * 0.1} color="#1A1E2A" position={[((left ? w : -w) / 2) * size, (w * size) / aspect / 1.5, -10]}>
            {"0" + (index + 1)}
          </Text>
        </Block>
      </group>
    </Block>
  )
}
export default function PortafolioPage() {
  const scrollArea = useRef()
  const onScroll = e => (state.top.current = e.target.scrollTop)
  useEffect(() => void onScroll({ target: scrollArea.current }), [])
  return (
    <div className="portafolioPage vh-100">
      <Canvas orthographic camera={{ zoom: state.zoom, position: [0, 0, 500] }}>
        <Suspense fallback={<Dom center className="loading" children="Loading..." />}>
          <Content />
          <Diamonds />
          <Startup />
        </Suspense>
      </Canvas>
      <div className="scrollArea" ref={scrollArea} onScroll={onScroll}>
        <div style={{ height: `${state.pages * 100}vh` }} />
      </div>
      <div className="frame">
        <h1 className="frame__title">Construyendo sueños arquitectónicos</h1>
        <div className="frame__links">
          <Link className="frame__link" to='/'>Home</Link>
          <Link className="frame__link" to='/blogs'>Blogs</Link>
          <Link className="frame__link" to='/portfolio'>Portafolio</Link>
          <Link className="frame__link" to='/fernando-panduro'>Conoceme</Link>
        </div>
        
      </div>
    </ div>
  )
}

