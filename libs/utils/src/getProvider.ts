/* istanbul ignore file */

import { InfuraProvider, JsonRpcProvider } from "@ethersproject/providers"
import { Network } from "./types"

export default function getProvider(
    network: Network,
    apiKey?: string
): JsonRpcProvider {
    switch (network) {
        case "localhost":
            return new JsonRpcProvider()
        case "goerli":
            return new InfuraProvider(network, apiKey)
        default:
            throw new TypeError(`'${network}' network is not supported`)
    }
}