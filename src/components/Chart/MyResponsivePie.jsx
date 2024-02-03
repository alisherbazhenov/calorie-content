/* eslint-disable */
import { ResponsivePie } from '@nivo/pie'
import { useSelector } from 'react-redux'
import { data } from './data'

export const MyResponsivePie = () => {
  const { dietItems } = useSelector((state) => state.diets)

  // достаю суммы необходимых величин
  // сумма общего веса всех блюд
  const sumOfGm = dietItems.reduce((accumulator, currentValue) => {
    return (
      accumulator +
      (Number(currentValue.gm) * currentValue.count
        ? Number(currentValue.gm) * currentValue.count
        : 0)
    )
  }, 0)

  // сумма всех жиров
  const sumOfFat = dietItems.reduce((accumulator, currentValue) => {
    return (
      accumulator +
      (Number(currentValue.fat) * currentValue.count
        ? Number(currentValue.fat) * currentValue.count
        : 0)
    )
  }, 0)

  // сумма всех белков
  const sumOfProtein = dietItems.reduce((accumulator, currentValue) => {
    return (
      accumulator +
      (Number(currentValue.protein) * currentValue.count
        ? Number(currentValue.protein) * currentValue.count
        : 0)
    )
  }, 0)

  // сумма всех угдеводов
  const sumOfCarbohydrates = dietItems.reduce((accumulator, currentValue) => {
    return (
      accumulator +
      (Number(currentValue.carbohydrates) * currentValue.count
        ? Number(currentValue.carbohydrates) * currentValue.count
        : 0)
    )
  }, 0)

  // сумма всех каллорий
  const sumOfKcal = dietItems.reduce((accumulator, currentValue) => {
    return (
      accumulator +
      (Number(currentValue.kcal) * currentValue.count
        ? Number(currentValue.kcal) * currentValue.count
        : 0)
    )
  }, 0)

  // Поиск id с дальнейшим прсисвоением новых значений
  const dataGm = data.find((item) => item.id === 'вес')
  const dataKcal = data.find((item) => item.id === 'калл.')
  const dataProtein = data.find((item) => item.id === 'белки')
  const dataFat = data.find((item) => item.id === 'жиры')
  const dataCarbohydrates = data.find((item) => item.id === 'углеводы')

  if (dataGm) {
    dataGm.value = sumOfGm
  }

  if (dataKcal) {
    dataKcal.value = sumOfKcal
  }

  if (dataProtein) {
    dataProtein.value = sumOfProtein
  }

  if (dataFat) {
    dataFat.value = sumOfFat
  }

  if (dataCarbohydrates) {
    dataCarbohydrates.value = sumOfCarbohydrates
  }

  return (
    <ResponsivePie
      data={data}
      margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
      innerRadius={0.5}
      padAngle={0.7}
      cornerRadius={3}
      activeOuterRadiusOffset={8}
      borderWidth={1}
      borderColor={{
        from: 'color',
        modifiers: [['darker', 0.2]],
      }}
      arcLinkLabelsSkipAngle={10}
      arcLinkLabelsTextColor="#333333"
      arcLinkLabelsThickness={2}
      arcLinkLabelsColor={{ from: 'color' }}
      arcLabelsSkipAngle={10}
      arcLabelsTextColor={{
        from: 'color',
        modifiers: [['darker', 2]],
      }}
      defs={[
        {
          id: 'dots',
          type: 'patternDots',
          background: 'inherit',
          color: 'rgba(255, 255, 255, 0.3)',
          size: 4,
          padding: 1,
          stagger: true,
        },
        {
          id: 'lines',
          type: 'patternLines',
          background: 'inherit',
          color: 'rgba(255, 255, 255, 0.3)',
          rotation: -45,
          lineWidth: 6,
          spacing: 10,
        },
      ]}
      fill={[
        {
          match: {
            id: 'ruby',
          },
          id: 'dots',
        },
        {
          match: {
            id: 'c',
          },
          id: 'dots',
        },
        {
          match: {
            id: 'go',
          },
          id: 'dots',
        },
        {
          match: {
            id: 'python',
          },
          id: 'dots',
        },
        {
          match: {
            id: 'scala',
          },
          id: 'lines',
        },
        {
          match: {
            id: 'lisp',
          },
          id: 'lines',
        },
        {
          match: {
            id: 'elixir',
          },
          id: 'lines',
        },
        {
          match: {
            id: 'javascript',
          },
          id: 'lines',
        },
      ]}
      legends={[
        {
          anchor: 'bottom',
          direction: 'row',
          justify: false,
          translateX: 0,
          translateY: 56,
          itemsSpacing: 0,
          itemWidth: 75,
          itemHeight: 18,
          itemTextColor: '#999',
          itemDirection: 'top-to-bottom',
          itemOpacity: 1,
          symbolSize: 18,
          symbolShape: 'circle',
          effects: [
            {
              on: 'hover',
              style: {
                itemTextColor: '#000',
              },
            },
          ],
        },
      ]}
    />
  )
}
