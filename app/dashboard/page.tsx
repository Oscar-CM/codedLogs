import React from 'react'
import Image from 'next/image'
import LeftSidebar from '../components/LeftSidebar'
import Topbar from '../components/Topbar'
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"


const Dashboard = () => {
  const invoices = [
    {
      invoice: "INV001",
      paymentStatus: "Paid",
      totalAmount: "$250.00",
      paymentMethod: "Credit Card",
    },
    {
      invoice: "INV002",
      paymentStatus: "Pending",
      totalAmount: "$150.00",
      paymentMethod: "PayPal",
    },
    {
      invoice: "INV003",
      paymentStatus: "Unpaid",
      totalAmount: "$350.00",
      paymentMethod: "Bank Transfer",
    },
    {
      invoice: "INV004",
      paymentStatus: "Paid",
      totalAmount: "$450.00",
      paymentMethod: "Credit Card",
    },
    {
      invoice: "INV005",
      paymentStatus: "Paid",
      totalAmount: "$550.00",
      paymentMethod: "PayPal",
    },
    {
      invoice: "INV006",
      paymentStatus: "Pending",
      totalAmount: "$200.00",
      paymentMethod: "Bank Transfer",
    },
    {
      invoice: "INV007",
      paymentStatus: "Unpaid",
      totalAmount: "$300.00",
      paymentMethod: "Credit Card",
    },
  ]

  return (
    <div className='flex flex-col m-2'>

      <h1 className='text-red-500 text-xl'> TODAYS OFFERS</h1>
      <div className='w-full'>
        <Table>
          <TableCaption>A list of the Current Products.</TableCaption>
          <TableHeader className='w-full'>
            <TableRow>
              <TableHead className="w-full">Invoice</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Method</TableHead>
              <TableHead className="text-right">Amount</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {invoices.map((invoice) => (
              <TableRow key={invoice.invoice}>
                <TableCell className="font-medium">{invoice.invoice}</TableCell>
                <TableCell>{invoice.paymentStatus}</TableCell>
                <TableCell>{invoice.paymentMethod}</TableCell>

                <TableCell className="text-right">{invoice.totalAmount}</TableCell>
                <TableCell className="text-right bg-blue-500">BUY</TableCell>
                <TableCell className="text-right"><Image
                className='h-[60px] w-[200px]'
                  src="/chase.PNG"
                  width={100}
                  height={5}
                  alt="chase"
                /></TableCell>
                <TableCell className='text-center'><p className='p-2 m-2 bg-blue-500 border-rounded'> Details</p></TableCell>

              </TableRow>
            ))}
          </TableBody>
          <TableFooter>
            <TableRow>
              <TableCell colSpan={3}>Total</TableCell>
              <TableCell className="text-right">$2,500.00</TableCell>
            </TableRow>
          </TableFooter>
        </Table>

      </div>
    </div>
  )
}

export default Dashboard
