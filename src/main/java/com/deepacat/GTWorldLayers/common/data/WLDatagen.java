package com.deepacat.GTWorldLayers.common.data;

import com.deepacat.GTWorldLayers.common.data.lang.LangHandler;
import com.tterrag.registrate.providers.ProviderType;


public class WLDatagen {
	public static void init() {
		WLRegistries.REGISTRATE.addDataGenerator(ProviderType.LANG, LangHandler::init);
	}
}
