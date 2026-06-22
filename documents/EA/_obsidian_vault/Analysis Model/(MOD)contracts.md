---
type: Class
stereotype: "resource"
package: "HomerSelect/BSL/Analysis Model/Contract Management/Customer Self-Care API/Application Interface Model/CLM OpenAPI/Contracts/v9.0/Contract"
domain: "Analysis Model"
element_id: 1844128
diagrams: 12
connections: 8
tags:
  - class
  - analysis-model
---

# 🔷 (MOD)contracts

> **Type**: Class · **Stereotype**: «resource»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Management/Customer Self-Care API/Application Interface Model/CLM OpenAPI/Contracts/v9.0/Contract

## 📝 Notes

{DEL CLM-5128} The following methods have been deleted from the given versions of the API:
/contracts	V1
/contracts/{contractNumber}	V1
/contracts/{contractNumber}/services	V1
/contracts/{contractNumber}/services/{serviceId}	V1
/contracts/{contractNumber}/services/serviceRequestOverview	V1
/contracts/{contractNumber}/paymentChannels	V1
/contracts/{contractNumber}/loanAccountOverviews	V1
/contracts/{contractNumber}/services/{serviceId}	V2
/contracts/{contractNumber}/services	V3
/contracts/{contractNumber}/services/{serviceId}	V3
/contracts	V4
/contracts/{contractNumber}	V4
/contracts/{contractNumber}/services/{serviceId}	V4
/contracts	V7
/contracts/{contractNumber}	V7
/{contractNumber}/services	V10
{/DEL}

## 🔗 Connections (8)

- → Dependency «path»: [[contract]]
- → Dependency: [[GetContractsResponse]]
- → Dependency: [[GetContractsResponse (Class 1833166)]]
- → Dependency: [[GetContractsResponse (Class 1833139)]]
- ← Dependency «path»: [[customer (Class 1844134)]]
- ← Dependency «path»: [[BSL OpenAPI]]
- → Dependency: [[GetContractsResponse (Class 1833163)]]
- → Dependency: [[{MOD}01.757 Get contracts for self-care]]

## 📊 Appears In (12 diagrams)

- Logical: Client on Contract change
- Logical: CLM OpenAPI
- Logical: Contract
- Logical: Contract
- Logical: Contract Commodities
- Logical: Contract Financial Partnerships
- Logical: Contract Loan Account Overview
- Logical: Contract Payment Channels
- Logical: Contract Services
- Logical: Contract Supplements - Get Contract Supplement by CUID v3
- Logical: Contract Supplements - Get Contract Supplement by CUID v4
- Logical: Contracts/Contract
