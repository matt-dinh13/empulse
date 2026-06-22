---
type: GUIElement
stereotype: "text"
package: "HomerSelect/BSL/Analysis Model/Account management/Cardless transactions support/User Interface Model"
domain: "Analysis Model"
element_id: 1776537
diagrams: 1
connections: 1
tags:
  - guielement
  - analysis-model
---

# 🖥️ Model

> **Type**: GUIElement · **Stereotype**: «text»
> **Package**: HomerSelect/BSL/Analysis Model/Account management/Cardless transactions support/User Interface Model

## 📝 Notes

Source: No

Actions:
Enabled if value of form.Commodity type has GetCommodityTypeDataResponse.flag.SKU, else Disabled

on form open:

	
- If CommodityData  and model value from input exist, preset with value from CommodityData.model else the field is empty.

on Confirm commodity action:

	
- value is set into CreateCommodityDataRequest.commodity.values.modelNumber


Localization code: ACC_CommodityModel

## 🔗 Connections (1)

- → Dependency: [[Mandatory if field is enabled]]

## 📊 Appears In (1 diagrams)

- Custom: Cardless POS transaction request - User Interface
