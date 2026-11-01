// Static export uses prebuilt responsive variants.
import visuals from "@/data/mapVisuals.json";
import "./map-scenery.css";

export default function MapScenery({ sizes = "100vw" }: { sizes?: string }) {
  return <picture className="map-scenery"><img className="map-scenery__image" src={visuals.world.desktop} srcSet={`${visuals.world.mobile} 960w, ${visuals.world.desktop} 1672w`} sizes={sizes} alt="" width={1672} height={941} loading="eager" fetchPriority="high" decoding="async" /></picture>;
}
