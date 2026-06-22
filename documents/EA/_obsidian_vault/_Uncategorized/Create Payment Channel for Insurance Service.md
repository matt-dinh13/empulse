---
type: Requirement
stereotype: "Functional"
package: ""
domain: "_Uncategorized"
element_id: 1826914
diagrams: 0
connections: 0
tags:
  - requirement
  - _uncategorized
---

# 📋 Create Payment Channel for Insurance Service

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: N/A

## 📝 Notes

Premium Payment purpose:
Saved as Contract.Payment Channel where Purpose = 'PP' (Premium Payment)
Contract.Payment Channel.Payment Channel Type = 'SBA' (retailer) 
Contract.PaymentChannel(Recipient).Salesroom refers to Salesroom which provides the insurance program on the insurance contract (get Salesroom by Contract.Contract Insurance Service -> Insurance Contract -> Insurance Program.Salesroom Code)
- get Recipient Name, Bank Account ID, Bank Account Number, Bank Code by Get recipient data for Payment Channel algorithm with parameters: SBA, Payment Channel.Salesroom ID and set them on Payment Channel
