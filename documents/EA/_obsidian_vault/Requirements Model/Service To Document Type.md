---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-8752 (CLM-2700) Separate document management and expose it via REST API"
domain: "Requirements Model"
element_id: 1880831
diagrams: 2
connections: 5
tags:
  - class
  - requirements-model
---

# 🔷 Service To Document Type

> **Type**: Class
> **Package**: HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-8752 (CLM-2700) Separate document management and expose it via REST API

## 📝 Notes

Defines document types available/required for a service. Typically that will be some service contract or addendum to the loan contract. Template for printing a document of the given type is also set up here.

## 🔗 Connections (5)

- → Dependency: [[{MOD}Check Moment Type]]
- → Association: [[Printout Template]]
- → Dependency: [[{MOD}Check Moment Type]]
- → Association: [[Document Type (Class 1877882)]]
- → Aggregation: [[Service (Class 1880804)]]

## 📊 Appears In (2 diagrams)

- Custom: CBL-8752 (CLM-2700) Separate document management and expose it via REST API
- Logical: Loan Service Structure

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| When Required | Check Moment Type |  |
| When Printable | Check Moment Type |  |
| Number of copies | Number |  |
