This mod adds world layers for ad astra to make ores with GregTech,

trying to do this with KubeJS can cause an issue where Ad-Astra loads before gregtech causing ore issues.

Feel free to PR layers for other mods dimensions if another mod with a race condition is found

Script with usage example:
```js
event.add('kubejs:moon/dilithium', vein => {
      vein.weight(120)
      vein.clusterSize(100)
      vein.density(0.5)
      vein.discardChanceOnAirExposure(1)
      // using layer from the mod
      vein.layer("ad_astra_moon")

      vein.dimensions("ad_astra:moon")
      vein.heightRangeUniform(-40, 80)
      vein.layeredVeinGenerator(generator => generator
          .buildLayerPattern(pattern => pattern
              .layer(l => l.weight(35).mat(GTMaterials.Diamond).size(2, 4))
              .layer(l => l.weight(35).mat(GTMaterials.get('dilithium')).size(1, 4))
          )
      )
})
```
layer ID's:
"ad_astra_moon", "ad_astra_mars", "ad_astra_mercury", "ad_astra_venus", "ad_astra_glacio"


Based on 
# GregTech Addon Template
Template for GregTech Modern addons on 1.20.1

Original template by screret, updated by JuiceyBeans
