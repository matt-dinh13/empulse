---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Requirements Model/In process/CSI/CBL-25266 (CSI-3437) VN New insurance on card product"
domain: "Requirements Model"
element_id: 1829321
diagrams: 1
connections: 1
tags:
  - requirement
  - requirements-model
---

# 📋 Insurance Service setting proposal

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Requirements Model/In process/CSI/CBL-25266 (CSI-3437) VN New insurance on card product

## 📝 Notes

VN requires to have a new behaviour of the insurance service to be charged and activated from external systems (typically insurance company and a local app). This part describes expected setting of the insurance service which can be used for testing purposes.
The new insurance service setting proposal:

	
- First period trigger= EXTERNAL_ACTIVATION (new item)
	
- First period duration = CALENDAR_YEAR (or other period definition except BILLING_PERIOD)
	
- Next period trigger and Next period duration is empty (no automatic prolongation is required)
	
- The insurance cannot be switched-off (no flag SWITCH_ALLOWED)


	
- The insurance cannot be cancelled via UI but COS API will be used only; Manual cancellation allowed = false
	
- The insurance cannot be terminated via UI but COS API will be used only; Manual termination allowed = false


	
- REL (Card product) insurance doesn't support any cancellation/termination functionality related to the Cooling off period (similar to CEL products)


Insurance Service example created in the VN A1 env:

	
- code: EXT_REL_PPI, name: External PPI for REL
	
- Tariff: AT_EXT_CHARGE (Tariff for external charging)


Product for assignment of the new insurance service: 

	
- LOR_RNDF_SMOKE
	
- LORRPOS; LOR_RPOS_SMOKE


salesroom -8007
4500000581
client:
DOC: Identification 123456789
DoB: 01/01/1970

## 🔗 Connections (1)

- → Generalization: [[CSI-3437]]

## 📊 Appears In (1 diagrams)

- Custom: CBL-25266 (CSI-3437) VN New insurance on card product
