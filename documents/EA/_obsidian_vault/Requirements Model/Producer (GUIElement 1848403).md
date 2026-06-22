---
type: GUIElement
stereotype: "label"
package: "HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-13568 (CLM-4182) - Pagination for commodity search REST API"
domain: "Requirements Model"
element_id: 1848403
diagrams: 2
connections: 0
tags:
  - guielement
  - requirements-model
---

# 🖥️ Producer

> **Type**: GUIElement · **Stereotype**: «label»
> **Package**: HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-13568 (CLM-4182) - Pagination for commodity search REST API

## 📝 Notes

Producer (producer's code and/or name) of the commodity.
Note: In case both producer code and producer name information are available for respective commodity, then both such values are concatenated together and separated by dash, e.g. 'OTHER - Samsung'.

Not editable - read only.

LDM source:

	
- CommodityForUpdate.commodity.producerCode //For producer code part.
	
- CommodityForUpdate.commodity.producerName //For producer name part.


Localization code:
GEN_CommodityProducer

## 📊 Appears In (2 diagrams)

- Custom: CBL-13568 (CLM-4182) - Pagination for commodity search REST API
- Custom: Edit commodity
