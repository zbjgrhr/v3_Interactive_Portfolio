import { statSync, existsSync } from "node:fs";
import path from "node:path";
import { describe, expect, it } from "vitest";
import visuals from "./mapVisuals.json";

const file = (src: string) => path.join(process.cwd(), "public", src);
describe("map display asset budgets", () => {
  it("keeps first-paint map downloads below the desktop and mobile budgets", () => {
    expect(statSync(file(visuals.world.desktop)).size).toBeLessThan(750_000);
    expect(statSync(file(visuals.world.mobile)).size).toBeLessThan(300_000);
  });
  it("keeps the entire animated map sprite set below 2.8 MB", () => {
    const sprites = [...Object.values(visuals.creatures), visuals.turtle, visuals.turtleWalk, visuals.egg];
    expect(sprites.reduce((sum, src) => sum + statSync(file(src)).size, 0)).toBeLessThan(2_800_000);
    for (const src of sprites) expect(src).toMatch(/\.[a-f0-9]{10}\.webp$/);
  });
  it("bounds the keyboard guide's next-frame downloads", () => {
    expect(visuals.tutorial.frames).toHaveLength(5);
    expect(visuals.tutorial.before).toHaveLength(5);
    for (let i = 0; i < 5; i++) {
      const pair = statSync(file(visuals.tutorial.frames[i])).size + statSync(file(visuals.tutorial.before[i])).size;
      expect(pair).toBeLessThan(750_000);
    }
  });
  it("preserves original artwork alongside the display derivatives", () => {
    for (const name of ["world-original.png", "capture-egg.png", "survival-log-turtle-poses.png", "map-teleport-creature.png"]) {
      expect(existsSync(file("/map-preview/" + name))).toBe(true);
    }
  });
});
