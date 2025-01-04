package com.deepacat.GTWorldLayers.common.data.lang;

import com.gregtechceu.gtceu.api.data.tag.TagPrefix;
import com.tterrag.registrate.providers.RegistrateLangProvider;
import net.minecraftforge.fml.ModList;

public class LangHandler extends com.gregtechceu.gtceu.data.lang.LangHandler {
	public static void init(RegistrateLangProvider provider) {
		if(ModList.get().isLoaded("ad_astra")){
			provider.add("tagprefix.moon", TagPrefix.get("moon").langValue());
			provider.add("tagprefix.mars", TagPrefix.get("mars").langValue());
			provider.add("tagprefix.venus", TagPrefix.get("venus").langValue());
			provider.add("tagprefix.mercury", TagPrefix.get("mercury").langValue());
			provider.add("tagprefix.glacio", TagPrefix.get("glacio").langValue());
		}
	}
}
