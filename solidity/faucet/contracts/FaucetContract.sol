pragma solidity >=0.4.22 <0.9.0;

contract Faucet {
    //storage variables
    uint public funds = 1000; // uint holds only positive values
    int public counter = -10;
    uint32 public test = 4294967295;
}