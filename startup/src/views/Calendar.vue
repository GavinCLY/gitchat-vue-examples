<template>
  <div class="calendar-wrapper">
    <div class="calendar-topbar">
      <h3>
        <span class="month">{{ date.month }}月</span>
        <span class="year">{{ date.year }}</span>
      </h3>
      <div class="nav-buttons">
        <a class="btn-prev-month" @click.prev='prevMonth'>
          <i class="fa fa-angle-left"></i>
        </a>
        <a class="btn-next-month" @click.prev='nextMonth'>
          <i class="fa fa-angle-right"></i>
        </a>
      </div>
    </div>
    <div class="calendar">
      <div class="week-title">
        <div class="weekdays">
          <div class="weekday" v-for="day in weekdays">{{ day }}</div>
        </div>
      </div>  
      <div class="weeks">
        <div class="week" v-for='(week, weekIndex) in weeks'>
          <div class="days">
            <day v-for='(day, dayIndex) in week' 
              :day='day' :dayIndex='dayIndex' :weekIndex='weekIndex'
              :key='day.time.getTime()'></day>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Day from '../components/Day'
  import { mapGetters } from 'vuex'
  import * as types from '../store/types'

  const WeekTitle = ['周一', '周二', '周三', '周四', '周五', '周六', '周日'];

  export default {
    data () {
      return {
        weekdays: WeekTitle
      }
    },

    components: { Day },

    computed: {
      ...mapGetters([
        'date',
        'weeks'
      ])
    },

    methods: {
      prevMonth () {
        this.$store.commit(types.PREV_MONTH)
      },
      nextMonth () {
        this.$store.commit(types.NEXT_MONTH)
      }
    }
  }
</script>

<style>
  .calendar-wrapper {
    width: 80%;
    min-height: 635px;
    float: left;
    background: #ffffff;
    position: relative;
    border: 1px solid #dbdfd6;
    box-shadow: 0 5px 15px rgba(0,0,0,0.05);
  }
  .calendar-topbar {
    height: 33px;
    margin: 20px 0 15px;
    padding: 0 20px;
    position: relative;
  }
  .calendar-topbar h3 {
    width: 200px;
    text-align: center;
    margin: 0 0 0 -100px;
    line-height: 30px;
    position: absolute;
    top: 0;
    left: 50%;
  }
  .nav-buttons {
    float: left;
  }
  .nav-buttons a {
    display: block;
    width: 40px;
    height: 26px;
    float: left;
    color: #333;
    font-size: 24px;
    text-align: center;
    line-height: 1;
    border: 1px solid #ccc;
    box-shadow: 1px 1px 1px rgba(0,0,0,0.1);
  }
  .calendar {
    position: relative;
    background: #ffffff;
    padding: 10px;
  }
  .week-title {
    display: table;
    table-layout: fixed;
    width: 100%;
  }
  .weekdays {
    display: table-row;
  }
  .weekday {
    display: table-cell;
    width: 14.286%;
    height: 12px;
    border-bottom: 2px solid #cccccc;
    line-height: 12px;
    font-size: 12px;
    padding: 0 0 5px 0;
    color: #aaaaaa;
    text-align: center;
  }
  .weeks .week {
    display: table;
    table-layout: fixed;
    width: 100%;
    border-bottom: 1px solid #dddddd;
    position: relative;
  }
  .weeks .week .days {
    display: table-row;
  }
</style>