GTCEuServerEvents.oreVeins(event => {
    event.add('kubejs:overworld/dilithium', vein => {
        vein.weight(120)
        vein.clusterSize(100)
        vein.density(1)
        vein.discardChanceOnAirExposure(1)
        vein.layer("owstones")
        vein.dimensions("minecraft:overworld", "worldshaper:wsoverworld")
        vein.heightRangeUniform(10, 30)
        vein.layeredVeinGenerator(generator => generator
            .buildLayerPattern(pattern => pattern
                .layer(l => l.weight(35).mat(GTMaterials.Diamond).size(2, 4))
                .layer(l => l.weight(35).mat(GTMaterials.get('dilithium')).size(2, 4))
            )
        )
    })
    event.add('kubejs:moon/dilithium', vein => {
        vein.weight(120)
        vein.clusterSize(100)
        vein.density(1)
        vein.discardChanceOnAirExposure(1)
        vein.layer("moon")
        vein.dimensions("ad_astra:moon")
        vein.heightRangeUniform(-40, 80)
        vein.layeredVeinGenerator(generator => generator
            .buildLayerPattern(pattern => pattern
                .layer(l => l.weight(35).mat(GTMaterials.Diamond).size(2, 4))
                .layer(l => l.weight(35).mat(GTMaterials.get('dilithium')).size(2, 4))
            )
        )
    })
})