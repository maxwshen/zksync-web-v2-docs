export const data = JSON.parse("{\"key\":\"v-57cf3f92\",\"path\":\"/dev/developer-guides/aa.html\",\"title\":\"Account abstraction support\",\"lang\":\"en-US\",\"frontmatter\":{\"description\":\"Introduction On Ethereum there are two types of accounts: externally owned accounts (EOAs) (https://ethereum.org/en/developers/docs/accounts/#externally-owned-accounts-and-key-p...\",\"head\":[[\"meta\",{\"property\":\"og:url\",\"content\":\"https://vuepress-theme-hope-docs-demo.netlify.app/dev/developer-guides/aa.html\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"Account abstraction support\"}],[\"meta\",{\"property\":\"og:description\",\"content\":\"Introduction On Ethereum there are two types of accounts: externally owned accounts (EOAs) (https://ethereum.org/en/developers/docs/accounts/#externally-owned-accounts-and-key-p...\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"article\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"en-US\"}]]},\"headers\":[{\"level\":2,\"title\":\"Introduction\",\"slug\":\"introduction\",\"link\":\"#introduction\",\"children\":[]},{\"level\":2,\"title\":\"Prerequisites\",\"slug\":\"prerequisites\",\"link\":\"#prerequisites\",\"children\":[]},{\"level\":2,\"title\":\"Design\",\"slug\":\"design\",\"link\":\"#design\",\"children\":[{\"level\":3,\"title\":\"Keeping nonces unique\",\"slug\":\"keeping-nonces-unique\",\"link\":\"#keeping-nonces-unique\",\"children\":[]},{\"level\":3,\"title\":\"Standardizing transaction hashes\",\"slug\":\"standardizing-transaction-hashes\",\"link\":\"#standardizing-transaction-hashes\",\"children\":[]},{\"level\":3,\"title\":\"IAccount interface\",\"slug\":\"iaccount-interface\",\"link\":\"#iaccount-interface\",\"children\":[]},{\"level\":3,\"title\":\"IPaymaster interface\",\"slug\":\"ipaymaster-interface\",\"link\":\"#ipaymaster-interface\",\"children\":[]},{\"level\":3,\"title\":\"Reserved fields of the Transaction struct with special meaning\",\"slug\":\"reserved-fields-of-the-transaction-struct-with-special-meaning\",\"link\":\"#reserved-fields-of-the-transaction-struct-with-special-meaning\",\"children\":[]},{\"level\":3,\"title\":\"The transaction flow\",\"slug\":\"the-transaction-flow\",\"link\":\"#the-transaction-flow\",\"children\":[]},{\"level\":3,\"title\":\"Fees\",\"slug\":\"fees\",\"link\":\"#fees\",\"children\":[]}]},{\"level\":2,\"title\":\"Using the SystemContractsCaller library\",\"slug\":\"using-the-systemcontractscaller-library\",\"link\":\"#using-the-systemcontractscaller-library\",\"children\":[]},{\"level\":2,\"title\":\"Extending EIP4337\",\"slug\":\"extending-eip4337\",\"link\":\"#extending-eip4337\",\"children\":[{\"level\":3,\"title\":\"Extending the allowed opcodes\",\"slug\":\"extending-the-allowed-opcodes\",\"link\":\"#extending-the-allowed-opcodes\",\"children\":[]},{\"level\":3,\"title\":\"Extending the set of slots that belong to a user\",\"slug\":\"extending-the-set-of-slots-that-belong-to-a-user\",\"link\":\"#extending-the-set-of-slots-that-belong-to-a-user\",\"children\":[]},{\"level\":3,\"title\":\"What could be allowed in the future?\",\"slug\":\"what-could-be-allowed-in-the-future\",\"link\":\"#what-could-be-allowed-in-the-future\",\"children\":[]}]},{\"level\":2,\"title\":\"Building custom accounts\",\"slug\":\"building-custom-accounts\",\"link\":\"#building-custom-accounts\",\"children\":[{\"level\":3,\"title\":\"EIP1271\",\"slug\":\"eip1271\",\"link\":\"#eip1271\",\"children\":[]},{\"level\":3,\"title\":\"The deployment process\",\"slug\":\"the-deployment-process\",\"link\":\"#the-deployment-process\",\"children\":[]},{\"level\":3,\"title\":\"Limitations of the verification step\",\"slug\":\"limitations-of-the-verification-step\",\"link\":\"#limitations-of-the-verification-step\",\"children\":[]},{\"level\":3,\"title\":\"Nonce holder contract\",\"slug\":\"nonce-holder-contract\",\"link\":\"#nonce-holder-contract\",\"children\":[]},{\"level\":3,\"title\":\"Sending transactions from an account\",\"slug\":\"sending-transactions-from-an-account\",\"link\":\"#sending-transactions-from-an-account\",\"children\":[]}]},{\"level\":2,\"title\":\"Paymasters\",\"slug\":\"paymasters\",\"link\":\"#paymasters\",\"children\":[{\"level\":3,\"title\":\"Paymaster verification rules\",\"slug\":\"paymaster-verification-rules\",\"link\":\"#paymaster-verification-rules\",\"children\":[]},{\"level\":3,\"title\":\"Built-in paymaster flows\",\"slug\":\"built-in-paymaster-flows\",\"link\":\"#built-in-paymaster-flows\",\"children\":[]},{\"level\":3,\"title\":\"Testnet paymaster\",\"slug\":\"testnet-paymaster\",\"link\":\"#testnet-paymaster\",\"children\":[]}]},{\"level\":2,\"title\":\"aa-signature-checker\",\"slug\":\"aa-signature-checker\",\"link\":\"#aa-signature-checker\",\"children\":[{\"level\":3,\"title\":\"Adding the library to your project:\",\"slug\":\"adding-the-library-to-your-project\",\"link\":\"#adding-the-library-to-your-project\",\"children\":[]},{\"level\":3,\"title\":\"Example of using the library\",\"slug\":\"example-of-using-the-library\",\"link\":\"#example-of-using-the-library\",\"children\":[]}]},{\"level\":2,\"title\":\"Verifying AA signatures within our SDK\",\"slug\":\"verifying-aa-signatures-within-our-sdk\",\"link\":\"#verifying-aa-signatures-within-our-sdk\",\"children\":[]}],\"readingTime\":{\"minutes\":13.77,\"words\":4131},\"filePathRelative\":\"dev/developer-guides/aa.md\",\"autoDesc\":true}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}