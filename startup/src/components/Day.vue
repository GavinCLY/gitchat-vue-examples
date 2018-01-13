<template>
  <div class="day" 
    @dragover="dragover" :class="{ 'other-month': !thisMonth }">
    <div class="info">
      <span class="plus" @click='editable = true'><i class="fa fa-plus"></i></span>
      <span class="num">{{ day.time | moment('DD') }}</span>
    </div>
    <div class="day-todos" v-if="day.events.length">
      <div class="day-event" v-for="(event, eventIndex) in day.events"
         :draggable='!event.edit'
        @click.stop='edit(eventIndex)'
        @dragstart='dragstart(eventIndex)' 
        @dragend='dragend'>
        <input class="event-input" v-if="event.edit" :value="event.content"
          @keydown.enter="update($event, eventIndex)"
          @blur="update($event, eventIndex)" />
        <span v-else>{{ event.content }}</span>
      </div>
    </div>
    <div class="day-edit" v-if="editable">
      <input class="event-input" v-model="content" @blur="addEvent" 
        @keydown.enter="addEvent" />
    </div>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  import * as types from '../store/types'

  export default {
    props: ['day', 'dayIndex', 'weekIndex'],

    data () {
      return {
        editable: false,
        content: ''
      }
    },

    computed: {
      thisMonth () {
        return this.date.month == this.day.time.getMonth() + 1;
      },
      ...mapGetters([
        'date'
      ])
    },

    methods: {
      addEvent () {
        const { content, $store, dayIndex, weekIndex } = this;
        this.editable = false;
        if (!content) return;
        // 如果需要修改后端数据，需使用dispatch
        $store.commit(types.ADD_CAL_EVENT, { event: { content }, dayIndex, weekIndex });
        this.content = '';
      },

      dragstart (eventIndex) {
        const { weekIndex, dayIndex, $store } = this;
        $store.commit(types.START_EVENT_DRAG, { weekIndex, dayIndex, eventIndex });
      },

      dragend () {
        const { weekIndex, dayIndex, $store } = this;
        $store.commit(types.DROP_EVENT)
      },

      dragover () {
        const { weekIndex, dayIndex, $store } = this;
        $store.commit(types.DRAG_OVER_DAY, { weekIndex, dayIndex });
      },

      update (e, eventIndex) {
        const { weekIndex, dayIndex, $store } = this;
        const content = e.target.value;
        if (content) {
          $store.commit(types.UPDATE_CAL_EVENT, { 
            weekIndex, 
            dayIndex, 
            eventIndex,
            event: { content: e.target.value, edit: false }
          });
        } else {
          $store.commit(types.DELETE_EVENT, { weekIndex, dayIndex, eventIndex });
        }
      },

      edit (eventIndex) {
        const { weekIndex, dayIndex, $store } = this;
        $store.commit(types.UPDATE_CAL_EVENT, { 
          weekIndex, 
          dayIndex, 
          eventIndex,
          event: { edit: true }
        });
      }
    }
  }
</script>

<style>
  .day {
    display: table-cell;
    width: 14.286%;
    height: 110px;
    border-right: 1px solid #dddddd;
    vertical-align: top;
    padding: 0 0 20px 0;
  }
  .info {
    height: 12px;
    padding: 6px 8px;
    font-size: 12px;
    line-height: 12px;
    color: #888888;
    font-family: arial;
  }
  .num {
    float: right;
  }
  .day-todos {
    
  }
  .event-input {
    width: 100%;
    box-sizing: border-box;
  }
  .other-month .info {
    color: #bbbbbb;
  }
  .day-event {
    font-size: 12px;
    line-height: 20px;
    padding: 0 5px;
    margin: 0;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    text-align: left;
    cursor: move;
  }
  .plus {
    float: left; cursor: pointer;
  }
</style>