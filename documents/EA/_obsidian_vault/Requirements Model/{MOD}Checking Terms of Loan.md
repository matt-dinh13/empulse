---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-8752 (CLM-2700) Separate document management and expose it via REST API"
domain: "Requirements Model"
element_id: 1373345
diagrams: 3
connections: 2
tags:
  - class
  - requirements-model
---

# 🔷 {MOD}Checking Terms of Loan

> **Type**: Class
> **Package**: HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-8752 (CLM-2700) Separate document management and expose it via REST API

## 📝 Notes

This class is specialization of the Service class for a checking terms of loan. It keeps some settings for activation and processing the service.

## 🔗 Connections (2)

- → Dependency: [[Document Type (Class 1877882)]]
- ← Dependency «mapping»: [[ServiceCHECKTLDataDto]]

## 📊 Appears In (3 diagrams)

- Custom: CBL-8752 (CLM-2700) Separate document management and expose it via REST API
- Logical: Checking Terms of Loan setting
- Logical: Service CHECKTL Data

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| Checked Document Type | Code |  |
| Number of Days after Service Activation to Evaluation | int |  |
| Penalty Due Date Related Installment | int |  |
| {ADD}Automatic Fulfillment | boolean |  |
