---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Requirements Model/Finished/IS/IS-280 (CBL-1071) Improvement of CBL-58 Functionality"
domain: "Requirements Model"
element_id: 1290938
diagrams: 1
connections: 1
tags:
  - requirement
  - requirements-model
---

# 📋 REQ#2 - System notifies clients about accepted payment immediately by sending SMS message anytime within the whole day and week - 24/7 in Bahasa language

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Requirements Model/Finished/IS/IS-280 (CBL-1071) Improvement of CBL-58 Functionality

## 📝 Notes

a. MSG_PAYMENT_PAIRED_DPD
Yth <title> <clientName>, trm ksh atas pbyrn Rp<paymentAmount> kontrak <contractNumber>, sisa <remainingInstallment> angs lg.Angs yg msh tertunda Rp<remainingDebt> mhn byr hr ini.HomeCredit02129539600

b. MSG_PAYMENT_PAIRED_DPD_0_PREPAYMENT
Yth <title> <clientName>, tlh diterima pbyrn Rp<paymentAmount> kntrk <contractNumber>, sisa <remainingInstallment> lg. Angs brktnya Rp<remainingDebt> mhn byr pd <nextDueDate>.Trm ksh.HomeCredit02129539600

c. MSG_PAYMENT_PAIRED_DPD_0_NO_PREPAYMENT
Yth <title> <clientName>, tlh diterima pbyrn Rp<paymentAmount> kntrk <contractNumber>, angs blm dibyr penuh.Mhn byr Rp<remainingDebt> utk mnghndri denda ktrlmbtan.HomeCredit02129539600 

d. MSG_PAYMENT_PAIRED
Yth <title> <clientName>, kami informasikan kontrak Anda no <contractNumber> telah lunas.Terima kasih atas kepercayaan Anda kepada kami. HomeCredit 02129539600

## 🔗 Connections (1)

- → Generalization: [[CBL-1071 Improvement of CBL-58 Functionality_ System supports on-line sending of SMS and email witho]]

## 📊 Appears In (1 diagrams)

- Custom: IS-280 (CBL-1071) Improvement of CBL-58 Functionality
