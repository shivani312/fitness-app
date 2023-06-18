export interface IFitnessData {
    user: IUser
    activities: IActivity[]
  }
  
  export interface IUser {
    id: string
    name: string
    email: string
    age: number
    height: number
    weight: number
    goal: IGoal
    avg_calories_burned: number
    avg_heart_rate: number
    avg_step: number
  }
  
  export interface IGoal {
    weightLoss: number
    sleep: number
    reading: number
  }
  
  export interface IActivity {
    id: string
    name: string
    date: string
    duration: number
    distance?: number
    calories_burned: number
    heart_rate: IHeartRate
    steps?: number
    pace?: IPace
    elevation_gain?: number
    speed?: ISpeed
    reps?: IReps
    weight_lifted?: IWeightLifted
    laps?: number
    pool_length?: number
    strides?: number
    strokes?: number
    weekly_data?: IWeeklyData[]
  }
  
  export interface IHeartRate {
    average: number
    max: number
  }

  export interface IPace {
    average: number
    best: number
  }
  
  export interface ISpeed {
    average: number
    max: number
  }
  
  export interface IReps {
    total: number
    sets: number
    average_per_set: number
  }
  
  export interface IWeightLifted {
    total: number
    average_per_rep: number
  }
  
  export interface IWeeklyData {
    date: string
    steps: number
    heart_rate: number
    distance: number
    calories_burned: number
  }