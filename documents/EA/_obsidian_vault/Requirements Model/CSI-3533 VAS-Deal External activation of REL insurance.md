---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Requirements Model/In process/CSI/CBL-25266 (CSI-3437) VN New insurance on card product"
domain: "Requirements Model"
element_id: 1829319
diagrams: 1
connections: 2
tags:
  - requirement
  - requirements-model
---

# 📋 CSI-3533 VAS-Deal External activation of REL insurance

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Requirements Model/In process/CSI/CBL-25266 (CSI-3437) VN New insurance on card product

## 📝 Notes

Requirement:
Insurance tenor and premium will be defined by the Insurance Company. Now, it is supposed tenor of 12 month.
Auto-renewal will be occurred after policy expiry date – this isn’t in the scope of the CBL.
Trigger to activate Insurance Contract comes from Insurance Company. It will inform VN local component (S.VAS) via API. It is expected, the S.VAS will call VAS-Deal activate Deal API for the Insurance activation (start of insurance period) and provides next needed data about the insurance (premium, sum insured,...)
Expected solution:

	
- There will be needed to update of this API for receiving Insurance data calculated on Insurance company side, i.e. insurance period start/end at least as now the method for activation supposes this data is calculated in BSL.
	
- https://vas.id00a1.cz.infra/deals/swagger/swagger-ui/index.html#/Deals/activateDeal

## 🔗 Connections (1)

- → Generalization: [[CSI-3437]]

## 📊 Appears In (1 diagrams)

- Custom: CBL-25266 (CSI-3437) VN New insurance on card product
