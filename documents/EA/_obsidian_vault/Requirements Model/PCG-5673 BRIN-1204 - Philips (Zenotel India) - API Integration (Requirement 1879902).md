---
type: Requirement
stereotype: ""
package: "HomerSelect/BSL/Requirements Model/In process/PCG/IN/PCG-5673 BRIN-1204 - Philips (Zenotel India) - API Integration"
domain: "Requirements Model"
element_id: 1879902
diagrams: 1
connections: 0
tags:
  - requirement
  - requirements-model
---

# 📋 PCG-5673 BRIN-1204 - Philips (Zenotel India) - API Integration

> **Type**: Requirement
> **Package**: HomerSelect/BSL/Requirements Model/In process/PCG/IN/PCG-5673 BRIN-1204 - Philips (Zenotel India) - API Integration

## 📝 Notes

Integration to Philips (Zenotel India) manufacturer.

	
- API for commodity validation and IMEI blocking
	
- API for unblocking IMEI


Update CommodityManufacturerWS - ValidateCommodity
	Add applicationNumber in response from zenotel after validation
Add new attribute in commodity to store applicationNumber
	Update db
	Rest api
New integration during commodity activation
	Change status of application in zenotel with applicationNumber
New integration during commodity validation cancellation
	Update application in zenotel

## 📊 Appears In (1 diagrams)

- Custom: PCG-5673 BRIN-1204 - Philips (Zenotel India) - API Integration
