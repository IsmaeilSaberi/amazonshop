'use client'

import { cn, formatCurrency } from '@/lib/utils'

const ProductPrice = ({
  price,
  className,
  listPrice = 0,
  isDeal = false,
  forListing = true,
  plain = false,
}: {
  price: number
  isDeal?: boolean
  listPrice?: number
  className?: string
  forListing?: boolean
  plain?: boolean
}) => {
  const discountPercent = Math.round(100 - (price / listPrice) * 100)
  const stringValue = price.toString()
  const [intValue, floatValue] = stringValue.includes('.')
    ? stringValue.split('.')
    : [stringValue, '']

  return plain ? (
    formatCurrency(price)
  ) : listPrice == 0 ? (
    <div className={cn('text-3xl', className)}>
      <span className='text-xs align-super'>$</span>
      {intValue}
      <span className='text-xs align-super'>{floatValue}</span>
    </div>
  ) : isDeal ? (
    <div className='space-y-2'>
      <div className='flex justify-center items-center gap-2'>
        <span className='bg-red-700 rounded-sm p-1 text-white text-sm font-semibold'>
          {discountPercent}% off
        </span>
        <span className='text-red-700 text-xs font-bold'>
          {'Product.Limited time deal'}
        </span>
      </div>
      <div
        className={`flex ${forListing && 'justify-center'} items-center gap-2`}
      >
        <div className={cn('text-3xl', className)}>
          <span className='text-xs align-super'>$</span>
          {intValue}
          <span className='text-xs align-super'>{floatValue}</span>
        </div>
        <div className='text-muted-foreground text-xs py-2'>
          {'Product.Was'}:{' '}
          <span className='line-through'>{formatCurrency(listPrice)}</span>
        </div>
      </div>
    </div>
  ) : (
    <div className=''>
      <div className='flex justify-center gap-3'>
        <div className='text-3xl text-orange-700'>-{discountPercent}%</div>
        <div className={cn('text-3xl', className)}>
          <span className='text-xs align-super'>$</span>
          {intValue}
          <span className='text-xs align-super'>{floatValue}</span>
        </div>
      </div>
      <div className='text-muted-foreground text-xs py-2'>
        {'Product.List price'}:{' '}
        <span className='line-through'>{formatCurrency(listPrice)}</span>
      </div>
    </div>
  )
}

export default ProductPrice
