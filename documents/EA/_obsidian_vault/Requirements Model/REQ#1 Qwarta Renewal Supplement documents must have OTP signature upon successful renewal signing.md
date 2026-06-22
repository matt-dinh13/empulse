---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Requirements Model/In process/CSI/CBL-28603 BRPH-1558 (CSI-3892) Qwarta Renewal Supplement Document OTP Signature"
domain: "Requirements Model"
element_id: 1850099
diagrams: 1
connections: 2
tags:
  - requirement
  - requirements-model
---

# 📋 REQ#1 Qwarta Renewal Supplement documents must have OTP signature upon successful renewal signing

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Requirements Model/In process/CSI/CBL-28603 BRPH-1558 (CSI-3892) Qwarta Renewal Supplement Document OTP Signature

## 📝 Notes

- Add additional OTP ID attribute into account renewal acceptation method (REST API)


	
- If OTP ID is provided, BSL calls DSM component, DSM calls OTP component to get OTP data and renewal supplement document will contain OTP signature
	
- The following renewal supplements documents should have OTP signature upon signing:
	
- VIRTUAL_LIMIT_AGREE
	
- GTC (general terms and conditions)

## 🔗 Connections (2)

- → Realisation: [[13.206 Recreate Account Renewal Supplement documents]]
- → Realisation: [[13.204 Accept Account Renewal Supplement]]

## 📊 Appears In (1 diagrams)

- Custom: One Level Requirement Hierarchy
