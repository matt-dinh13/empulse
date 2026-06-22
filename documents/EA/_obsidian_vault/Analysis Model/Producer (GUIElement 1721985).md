---
type: GUIElement
stereotype: "label"
package: "HomerSelect/BSL/Analysis Model/Contract Origination/Application detail/User Interface Model/Tab - Commodity/Edit commodity (modal window)"
domain: "Analysis Model"
element_id: 1721985
diagrams: 1
connections: 0
tags:
  - guielement
  - analysis-model
---

# 🖥️ Producer

> **Type**: GUIElement · **Stereotype**: «label»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Origination/Application detail/User Interface Model/Tab - Commodity/Edit commodity (modal window)

## 📝 Notes

Producer (producer's code and/or name) of the commodity.
Note: In case both producer code and producer name information are available for respective commodity, then both such values are concatenated together and separated by dash, e.g. 'OTHER - Samsung'.

Not editable - read only.

LDM source:

	
- CommodityForUpdate.commodity.producerCode //For producer code part.
	
- CommodityForUpdate.commodity.producerName //For producer name part.


Localization code:
GEN_CommodityProducer

## 📊 Appears In (1 diagrams)

- Custom: Edit commodity
