"use strict";
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.StayEscrow__factory = void 0;
const ethers_1 = require("ethers");
const _abi = [
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "payee",
                type: "address",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "weiAmount",
                type: "uint256",
            },
            {
                indexed: false,
                internalType: "bytes32",
                name: "spaceId",
                type: "bytes32",
            },
        ],
        name: "Deposited",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "payee",
                type: "address",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "weiAmount",
                type: "uint256",
            },
            {
                indexed: false,
                internalType: "bytes32",
                name: "spaceId",
                type: "bytes32",
            },
        ],
        name: "Withdrawn",
        type: "event",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "payee",
                type: "address",
            },
            {
                internalType: "bytes32",
                name: "spaceId",
                type: "bytes32",
            },
        ],
        name: "deposit",
        outputs: [],
        stateMutability: "payable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "payee",
                type: "address",
            },
            {
                internalType: "bytes32",
                name: "spaceId",
                type: "bytes32",
            },
        ],
        name: "depositsOf",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "payee",
                type: "address",
            },
            {
                internalType: "bytes32",
                name: "spaceId",
                type: "bytes32",
            },
        ],
        name: "depositsState",
        outputs: [
            {
                internalType: "enum StayEscrow.State",
                name: "",
                type: "uint8",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
];
class StayEscrow__factory {
    static createInterface() {
        return new ethers_1.utils.Interface(_abi);
    }
    static connect(address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    }
}
exports.StayEscrow__factory = StayEscrow__factory;
StayEscrow__factory.abi = _abi;
//# sourceMappingURL=StayEscrow__factory.js.map